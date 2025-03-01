import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoDTO } from './create.dto';

export class UpdateInsumoDTO extends PartialType(CreateInsumoDTO) {}
