import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDTO } from './create.dto';

export class UpdateClienteDTO extends CreateClienteDTO { }

export class PatchClienteDTO extends PartialType(CreateClienteDTO) { }