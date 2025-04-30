import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/configuration';
import validationSchema from './core/configuration/schema/validationSchema';
import DatabaseModule from './core/database';
import { ColorModule } from './modules/color/color.module';
import { AlmacenModule } from './modules/almacen/almacen.module';
import { InsumoModule } from './modules/insumo/insumo.module';
import { ClaveSatModule } from './modules/clave_sat/clave_sat.module';
import { MedidaModule } from './modules/medida/medida.module';
import { InventarioModule } from './modules/inventario/inventario.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { ArchivoModule } from './modules/archivo/archivo.module';
import { EntradaModule } from './modules/entrada/entrada.module';
import { EncargadoAlmacenModule } from './modules/encargado_almacen/encargado_almacen.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      validationSchema,
      load: [configuration],
      isGlobal: true
    }),
    DatabaseModule,
    ColorModule,
    AlmacenModule,
    MedidaModule,
    InsumoModule,
    ClaveSatModule,
    InventarioModule,
    UsuarioModule,
    ProveedorModule,
    ArchivoModule,
    EntradaModule,
    EncargadoAlmacenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
