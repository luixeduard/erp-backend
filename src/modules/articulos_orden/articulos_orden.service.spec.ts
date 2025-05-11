import { Test, TestingModule } from '@nestjs/testing';
import { ArticulosOrdenService } from './articulos_orden.service';

describe('ArticulosOrdenService', () => {
  let service: ArticulosOrdenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticulosOrdenService],
    }).compile();

    service = module.get<ArticulosOrdenService>(ArticulosOrdenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
