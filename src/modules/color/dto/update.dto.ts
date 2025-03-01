import { PartialType } from '@nestjs/mapped-types';
import { CreateColorDTO } from './create.dto';

export class UpdateColorDTO extends PartialType(CreateColorDTO) { }
