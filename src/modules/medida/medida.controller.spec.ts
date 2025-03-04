import { Test, TestingModule } from '@nestjs/testing';
import { MedidaController } from './medida.controller';
import { MedidaService } from './medida.service';

describe('MedidaController', () => {
  let controller: MedidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedidaController],
      providers: [MedidaService],
    }).compile();

    controller = module.get<MedidaController>(MedidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
