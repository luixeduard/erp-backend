import { PartialType } from '@nestjs/swagger';
import { CreateColorDTO } from './create.dto';

export class UpdateColorDTO extends PartialType(CreateColorDTO) { }
