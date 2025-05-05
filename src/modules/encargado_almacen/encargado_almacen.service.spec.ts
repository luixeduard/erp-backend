import { Test, TestingModule } from '@nestjs/testing';
import { EncargadoAlmacenService } from './encargado_almacen.service';

describe('EncargadoAlmacenService', () => {
  let service: EncargadoAlmacenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncargadoAlmacenService],
    }).compile();

    service = module.get<EncargadoAlmacenService>(EncargadoAlmacenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
