import { PartialType } from '@nestjs/mapped-types';
import { CreateInventarioDTO } from './create.dto';

export class UpdateInventarioDTO extends CreateInventarioDTO { }
export class PatchInventarioDTO extends PartialType(CreateInventarioDTO) { }
