import { Test, TestingModule } from '@nestjs/testing';
import { ArticulosOrdenController } from './articulos_orden.controller';
import { ArticulosOrdenService } from './articulos_orden.service';

describe('ArticulosOrdenController', () => {
  let controller: ArticulosOrdenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticulosOrdenController],
      providers: [ArticulosOrdenService],
    }).compile();

    controller = module.get<ArticulosOrdenController>(ArticulosOrdenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
