import { Test, TestingModule } from '@nestjs/testing';
import { ClaveSatController } from './clave_sat.controller';
import { ClaveSatService } from './clave_sat.service';

describe('ClaveSatController', () => {
  let controller: ClaveSatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClaveSatController],
      providers: [ClaveSatService],
    }).compile();

    controller = module.get<ClaveSatController>(ClaveSatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
