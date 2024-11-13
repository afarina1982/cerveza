import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './orm/orm.module';
import { PedidosCervezasModule } from './pedidos_cervezas/pedidos_cervezas.module';
import { EquipoModule } from './equipo/equipo.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CervezasModule } from './cervezas/cervezas.module';
import { CarritosModule } from './carritos/carritos.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { DatosEnviosModule } from './datos_envios/datos_envios.module';
import { TiposPersonajesModule } from './tipos_personajes/tipos_personajes.module';
import { FormulariosModule } from './formularios/formularios.module';
import { CommonMiddleware } from './common/common.middleware';
import { AmargoresModule } from './amargores/amargores.module';
import { ComunasModule } from './comunas/comunas.module';
import { FormatosModule } from './formatos/formatos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { RegionesModule } from './regiones/regiones.module';
import { TiposCervezasModule } from './tipos_cervezas/tipos_cervezas.module';

@Module({
  imports: [
    OrmModule,
    PedidosCervezasModule,
    EquipoModule,
    UsuariosModule,
    CervezasModule,
    CarritosModule,
    SuscripcionesModule,
    PedidosModule, PerfilesModule,
    DatosEnviosModule,
    TiposPersonajesModule,
    FormulariosModule,
    AmargoresModule,
    ComunasModule,
    FormatosModule,
    PerfilesModule,
    ProveedoresModule,
    RegionesModule,
    TiposCervezasModule,
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CommonMiddleware)
      .forRoutes('*');

  }

}
