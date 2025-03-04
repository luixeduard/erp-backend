import { PartialType } from '@nestjs/swagger';
import { CreateAlmacenDTO } from './create.dto';

export class UpdateAlmacenDTO extends PartialType(CreateAlmacenDTO) { }
