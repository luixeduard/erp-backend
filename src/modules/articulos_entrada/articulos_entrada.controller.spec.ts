import { Test, TestingModule } from '@nestjs/testing';
import { ArticulosEntradaController } from './articulos_entrada.controller';
import { ArticulosEntradaService } from './articulos_entrada.service';

describe('ArticulosEntradaController', () => {
  let controller: ArticulosEntradaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticulosEntradaController],
      providers: [ArticulosEntradaService],
    }).compile();

    controller = module.get<ArticulosEntradaController>(ArticulosEntradaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
