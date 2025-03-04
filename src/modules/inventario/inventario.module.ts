import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Inventario } from './entity/inventario.entity';

@Module({
  imports: [SequelizeModule.forFeature([Inventario])],
  controllers: [InventarioController],
  providers: [InventarioService],
})
export class InventarioModule { }
