import { Test, TestingModule } from '@nestjs/testing';
import { PrecioHistorialController } from './precio_historial.controller';
import { PrecioHistorialService } from './precio_historial.service';

describe('PrecioHistorialController', () => {
  let controller: PrecioHistorialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrecioHistorialController],
      providers: [PrecioHistorialService],
    }).compile();

    controller = module.get<PrecioHistorialController>(PrecioHistorialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
