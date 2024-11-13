import { Column, Entity, PrimaryColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';  
import { Pedido } from './pedido.entity';
import { Direccion } from 'src/orm/entity/datos_envio.entity';
import { Suscripcion } from './suscripcion.entity';
import { Perfil } from './perfil.entity';



@Entity({ name: 'usuario' })
export class Usuario {
@PrimaryColumn({name: 'rut'})
    public rut: string;
@Column({name:'nombre'})
    public nombre: string;
@Column({name:'apellido'})
    public apellido: string;
@Column({name:'contraseña'})
    public contrasenia: string;
@Column({name:'edad'})
    public edad: number;
@Column({name:'id_pefil'})
    public id_perfil: number;
@Column({name:'tipo_suscripcion'})
    public tipo_suscripcion: Suscripcion;

@ManyToOne(() => Suscripcion, s => s.usuarios)
@JoinColumn({name: 'tipo_suscripcion'})
suscripcion: Suscripcion;

@OneToMany(() => Pedido, p => p.rut_comprador)
pedidos: Pedido[];

@ManyToOne(() => Perfil, p => p.usuarios)
@JoinColumn({name: 'id_perfil'})
perfil: Perfil;

@OneToMany(() => Direccion, d => d.rut_usuario)
direcciones: Direccion[];


}

