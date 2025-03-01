import { SequelizeModuleOptions } from "@nestjs/sequelize";

export interface ConfigInterface {
  db: SequelizeModuleOptions,
  port: number,
  environment: 'development' | 'production' | 'test'
}