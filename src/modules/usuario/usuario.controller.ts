import { Controller } from '@nestjs/common';
import { GenericController } from 'src/core/global/controller/base.controller';
import { CreateUsuarioDTO } from './dto/create.dto';
import { FindUsuarioDTO } from './dto/find.dto';
import { UpdateUsuarioDTO, PatchUsuarioDTO } from './dto/update.dto';
import { UsuarioDTO, UsuarioPaggingDTO } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController extends GenericController<CreateUsuarioDTO, FindUsuarioDTO, UpdateUsuarioDTO, PatchUsuarioDTO, UsuarioDTO, UsuarioPaggingDTO>(
  CreateUsuarioDTO,
  FindUsuarioDTO,
  UpdateUsuarioDTO,
  PatchUsuarioDTO,
  UsuarioDTO,
  UsuarioPaggingDTO,
  'Usuario'
) {
  constructor(private readonly UsuarioService: UsuarioService) {
    super(UsuarioService);
  }
}
