import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoDTO } from './create.dto';

export class UpdateInsumoDTO extends CreateInsumoDTO { }
export class PatchInsumoDTO extends PartialType(CreateInsumoDTO) { }

