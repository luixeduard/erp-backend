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
import { ReportesModule } from './modules/reportes/reportes.module';
import { InventarioModule } from './modules/inventario/inventario.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { ArchivoModule } from './modules/archivo/archivo.module';
import { EntradaModule } from './modules/entrada/entrada.module';
import { EncargadoAlmacenModule } from './modules/encargado_almacen/encargado_almacen.module';
import { OrdenProduccionModule } from './modules/orden_produccion/orden_produccion.module';
import { ArticulosOrdenModule } from './modules/articulos_orden/articulos_orden.module';
import { ArticulosEntradaModule } from './modules/articulos_entrada/articulos_entrada.module';
import { ClienteModule } from './modules/cliente/cliente.module';

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
    ReportesModule,
    InventarioModule,
    UsuarioModule,
    ProveedorModule,
    ArchivoModule,
    EntradaModule,
    EncargadoAlmacenModule,
    OrdenProduccionModule,
    ArticulosOrdenModule,
    ArticulosEntradaModule,
    ClienteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
