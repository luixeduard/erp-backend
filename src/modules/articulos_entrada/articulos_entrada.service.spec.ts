import { Test, TestingModule } from '@nestjs/testing';
import { ArticulosEntradaService } from './articulos_entrada.service';

describe('ArticulosEntradaService', () => {
  let service: ArticulosEntradaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticulosEntradaService],
    }).compile();

    service = module.get<ArticulosEntradaService>(ArticulosEntradaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
