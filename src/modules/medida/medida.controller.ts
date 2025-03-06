import { Controller } from '@nestjs/common';
import { MedidaService } from './medida.service';


@Controller('medida')
export class MedidaController {
  constructor(private readonly medidaService: MedidaService) {}
}
