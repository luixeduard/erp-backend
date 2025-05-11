import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdenDTO } from './create.dto';

export class UpdateOrdenDTO extends CreateOrdenDTO { }

export class PatchOrdenDTO extends PartialType(CreateOrdenDTO) { }