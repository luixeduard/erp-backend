import { PartialType } from '@nestjs/mapped-types';
import { CreateClaveSatDTO } from './create.dto';

export class UpdateClaveSatDTO extends PartialType(CreateClaveSatDTO) { }
