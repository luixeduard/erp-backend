import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Proveedor } from './entity/proveedor.entity';

@Module({
  imports: [SequelizeModule.forFeature([Proveedor])],
  controllers: [ProveedorController],
  providers: [ProveedorService],
})
export class ProveedorModule { }
