import { Controller } from '@nestjs/common';
import { ClaveSatService } from './clave_sat.service';


@Controller('clave-sat')
export class ClaveSatController {
  constructor(private readonly claveSatService: ClaveSatService) { }
}
