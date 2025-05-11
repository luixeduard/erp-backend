import { Test, TestingModule } from '@nestjs/testing';
import { OrdenProduccionController } from './orden_produccion.controller';
import { OrdenProduccionService } from './orden_produccion.service';

describe('OrdenProduccionController', () => {
  let controller: OrdenProduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenProduccionController],
      providers: [OrdenProduccionService],
    }).compile();

    controller = module.get<OrdenProduccionController>(OrdenProduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
