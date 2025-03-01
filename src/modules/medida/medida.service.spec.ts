import { Test, TestingModule } from '@nestjs/testing';
import { MedidaService } from './medida.service';

describe('MedidaService', () => {
  let service: MedidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedidaService],
    }).compile();

    service = module.get<MedidaService>(MedidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
