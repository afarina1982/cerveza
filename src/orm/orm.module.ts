import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amargor } from './entity/amargor.entity';
import { Carrito } from './entity/carrito.entity';
import { Cerveza } from './entity/cerveza.entity';
import { Comuna } from './entity/comuna.entity';
import { Formato } from './entity/formato.entity';
import { Formulario } from './entity/formulario.entity';
import { Pedido } from './entity/pedido.entity';
import { Pedido_Cerveza } from './entity/pedidos_cerveza.entity';
import { Perfil } from './entity/perfil.entity';
import { Proveedor } from './entity/proveedor.entity';
import { Region } from './entity/region.entity';
import { Suscripcion } from './entity/suscripcion.entity';
import { TiposCerveza } from './entity/tipos_cerveza.entity';
import { TiposPersonaje } from './entity/tipos_personaje.entity';
import { Usuario } from './entity/usuario.entity';
import { Direccion } from './entity/datos_envio.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [
            Amargor,
            Carrito,
            Cerveza,
            Comuna,
            Direccion,
            Formato,
            Formulario,
            Pedido,
            Pedido_Cerveza,
            Perfil,
            Proveedor,
            Region,
            Suscripcion,
            TiposCerveza,
            TiposPersonaje,
            Usuario
        ],
    })
    ],
})
export class OrmModule { }
