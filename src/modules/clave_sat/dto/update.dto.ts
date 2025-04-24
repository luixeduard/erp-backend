import { PartialType } from '@nestjs/mapped-types';
import { CreateClaveSatDTO } from './create.dto';

export class UpdateClaveSatDTO extends CreateClaveSatDTO { }
export class PatchClaveSatDTO extends PartialType(CreateClaveSatDTO) { }

