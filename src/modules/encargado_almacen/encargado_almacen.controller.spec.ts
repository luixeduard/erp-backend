import { Test, TestingModule } from '@nestjs/testing';
import { EncargadoAlmacenController } from './encargado_almacen.controller';
import { EncargadoAlmacenService } from './encargado_almacen.service';

describe('EncargadoAlmacenController', () => {
  let controller: EncargadoAlmacenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncargadoAlmacenController],
      providers: [EncargadoAlmacenService],
    }).compile();

    controller = module.get<EncargadoAlmacenController>(EncargadoAlmacenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
