import { PartialType } from '@nestjs/swagger';
import { CreateColorDTO } from './create.dto';

export class UpdateColorDTO extends CreateColorDTO { }
export class PatchColorDTO extends PartialType(CreateColorDTO) { }

