import { Controller } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { GenericController } from 'src/core/global/controller/base.controller';
import { ClienteDTO, ClientePaggingDTO } from './dto/cliente';
import { CreateClienteDTO } from './dto/create.dto';
import { FindClienteDTO } from './dto/find.dto';
import { UpdateClienteDTO, PatchClienteDTO } from './dto/update.dto';

@Controller('cliente')
export class ClienteController extends GenericController<CreateClienteDTO, FindClienteDTO, UpdateClienteDTO, PatchClienteDTO, ClienteDTO, ClientePaggingDTO>(
  CreateClienteDTO,
  FindClienteDTO,
  UpdateClienteDTO,
  PatchClienteDTO,
  ClienteDTO,
  ClientePaggingDTO,
  'Cliente'
) {
  constructor(private readonly ClienteService: ClienteService) {
    super(ClienteService);
  }
}