import { Injectable } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/create.dto';
import { UpdateUsuarioDTO } from './dto/update.dto';
import { Usuario } from './entity/usuario.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/core/global/service/base.service';

@Injectable()
export class UsuarioService extends BaseService<Usuario, CreateUsuarioDTO, UpdateUsuarioDTO>{
  constructor(@InjectModel(Usuario) private readonly UsuarioModel: typeof Usuario) {
    super(UsuarioModel)
  }
}

