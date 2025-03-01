import { Test, TestingModule } from '@nestjs/testing';
import { ClaveSatService } from './clave_sat.service';

describe('ClaveSatService', () => {
  let service: ClaveSatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaveSatService],
    }).compile();

    service = module.get<ClaveSatService>(ClaveSatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
