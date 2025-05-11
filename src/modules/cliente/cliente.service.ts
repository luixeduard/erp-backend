import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';
import { CreateClienteDTO } from './dto/create.dto';
import { UpdateClienteDTO, PatchClienteDTO } from './dto/update.dto';
import { Cliente } from './entity/cliente.entity';

@Injectable()
export class ClienteService extends BaseService<Cliente, CreateClienteDTO, UpdateClienteDTO, PatchClienteDTO> {
  constructor(@InjectModel(Cliente) private readonly ClienteModel: typeof Cliente) {
    super(ClienteModel)
  }
}

