import { Module } from '@nestjs/common';
import { ClaveSatService } from './clave_sat.service';
import { ClaveSatController } from './clave_sat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClaveSat } from './entity/clave_sat.entity';

@Module({
  imports: [SequelizeModule.forFeature([ClaveSat])],
  controllers: [ClaveSatController],
  providers: [ClaveSatService],
})
export class ClaveSatModule { }
