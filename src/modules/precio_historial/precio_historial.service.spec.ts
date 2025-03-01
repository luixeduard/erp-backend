import { Test, TestingModule } from '@nestjs/testing';
import { PrecioHistorialService } from './precio_historial.service';

describe('PrecioHistorialService', () => {
  let service: PrecioHistorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrecioHistorialService],
    }).compile();

    service = module.get<PrecioHistorialService>(PrecioHistorialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
