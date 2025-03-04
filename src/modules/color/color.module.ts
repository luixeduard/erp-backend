import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Color } from './entity/color.entity';

@Module({
  imports: [SequelizeModule.forFeature([Color])],
  controllers: [ColorController],
  providers: [ColorService],
})
export class ColorModule { }
