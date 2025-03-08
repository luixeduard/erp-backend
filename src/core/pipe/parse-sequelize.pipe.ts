import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Attributes, FindAndCountOptions, Model, WhereOptions, Op, Sequelize } from 'sequelize';
import { inspect } from 'util';
import { FunctionRepresentation } from '../global/dto/pagging.dto';

type Include<TAttributes> = {
  where?: { [key in keyof TAttributes]: TAttributes[key] | Record<string, TAttributes[key]> },
  include?: Include<TAttributes> | Include<TAttributes>[]
}

@Injectable()
export class ParseSequelizePipe<T extends { where: string, include: string, order: string[][], attributes: (string | FunctionRepresentation)[] }, TAttributes, M extends Model> implements PipeTransform<T, Omit<FindAndCountOptions<Attributes<M>>, "group"> | {} | undefined> {

  private parseConditions(conditions: { [key in keyof TAttributes]: TAttributes[key] | Record<string, TAttributes[key]> }) {
    return Object.fromEntries(
      Object.entries(conditions).map(([key, value]) => {
        // Si el valor es null o undefined, lo manejamos primero
        if (value === null || value === undefined) {
          if (key.startsWith("Op.")) {
            const operator = key.replace("Op.", "");
            if (operator in Op) {
              return [Op[operator], value]; // Devuelve el operador de Sequelize con el valor null/undefined
            }
          }
          return [key, value]; // Devuelve la clave y el valor sin cambios
        }

        // Si la clave tiene el prefijo "Op.", la convertimos a un operador de Sequelize
        if (key.startsWith("Op.")) {
          const operator = key.replace("Op.", "");
          if (operator in Op) {
            // Si el valor es un array, lo devolvemos sin cambios
            if (Array.isArray(value)) {
              return [Op[operator], value];
            }

            // Si el valor es un objeto y no es una fecha, lo procesamos recursivamente
            if (typeof value === 'object' && !(value instanceof Date)) {
              return [Op[operator], this.parseConditions(value as { [key in keyof TAttributes]: TAttributes[key] | Record<string, TAttributes[key]> })];
            }

            // Si no es un array ni un objeto, devolvemos el valor sin cambios
            return [Op[operator], value];
          }
        }

        // Si no tiene el prefijo "Op.", procesamos el valor normalmente
        if (Array.isArray(value)) {
          return [key, value];
        }

        if (typeof value === 'object' && !(value instanceof Date)) {
          return [key, this.parseConditions(value as { [key in keyof TAttributes]: TAttributes[key] | Record<string, TAttributes[key]> })];
        }

        return [key, value];
      }),
    );
  }

  private getWhereConditionsSequelize(where: string): WhereOptions<TAttributes> {
    try {
      const parseConditions = JSON.parse(where) as { [key in keyof TAttributes]: TAttributes[key] | Record<string, TAttributes[key]> }
      return this.parseConditions(parseConditions)
    } catch (error) {
      throw new BadRequestException('Invalid where format');
    }
  }

  private parseIncludes(include: Include<TAttributes> | Include<TAttributes>[]): any {
    if (Array.isArray(include)) {
      return include.map((inc) => {
        if ("where" in inc && inc.where) {
          const where = this.parseConditions(inc.where)
          inc.where = where;
        }
        if ("include" in inc && inc.include) {
          inc.include = this.parseIncludes(inc.include);
        }
        return inc;
      });
    }

    if ("where" in include && include.where) {
      include.where = this.parseConditions(include.where);
    }
    return include;
  }

  private getIncludesSequelize(include: string) {
    try {
      const parsedIncludes = JSON.parse(include);
      return this.parseIncludes(parsedIncludes);
    } catch (error) {
      throw new BadRequestException('Invalid include format');
    }
  }

  private parseOrder(order: string[][]) {
    return order.map(or => {
      if (or.length !== 2) {
        throw new BadRequestException("Invalid order format")
      }
      if (or[1] !== "ASC" && or[1] !== "DESC") {
        throw new BadRequestException("Invalid order format")
      }
      return [...or[0].split("."), or[1]]
    })
  }

  private parseAttributes(attributes: (string | FunctionRepresentation)[]) {
    return attributes.map((attr) => {
      // Si es un objeto que representa una función, lo convertimos a una función de Sequelize
      if (typeof attr === 'object' && attr.fn && attr.cols) {
        const args = attr.cols.map((arg) =>
          arg.is_col ? Sequelize.col(arg.value) : arg.value,
        );
        return [Sequelize.fn(attr.fn, ...args), attr.as];
      }
      // Si es un string, lo devolvemos sin cambios
      return attr;
    });
  }

  transform(value: T, metadata: ArgumentMetadata) {
    const where = value.where ? this.getWhereConditionsSequelize(value.where) : undefined;
    const include = value.include ? this.getIncludesSequelize(value.include) : undefined;
    const order = value.order ? this.parseOrder(value.order) : undefined
    const attributes = value.attributes ? this.parseAttributes(value.attributes) : undefined
    console.log(attributes)
    return { ...value, where, include, order }
  }
}
