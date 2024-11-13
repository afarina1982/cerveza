import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Cerveza } from "./cerveza.entity";
import { Usuario } from "./usuario.entity";
import { TipoEnvio } from "src/enum/tipo-envio";
import { ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { JoinColumn } from "typeorm";
import { Perfil } from "./perfil.entity";


@Entity({ name: 'Suscripcion' })
export class Suscripcion {
    @PrimaryColumn({ name: 'id' })
    public id: number;

    @Column({ name: 'tipo_suscripcion' })
    public tipo_suscripcion: string;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'descripcion' })
    public descripcion: string;

    @Column({ name: 'precio' })
    public precio: number;

    @Column({ name: 'descuento' })
    public descuento: number;

    @Column({ name: 'tipo_envio' })
    public tipo_envio: TipoEnvio;

    @OneToMany(() => Usuario, u => u.tipo_suscripcion)
    usuarios: Usuario[];

    @ManyToMany(() => Cerveza)
    @JoinTable({
        name: 'Suscripcion_Cerveza',
        joinColumn: { name: 'id_suscripcion', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_cerveza', referencedColumnName: 'id' }
    })
    sus_cerveza: Cerveza[];

    @OneToMany(() => Perfil, p => p.suscripcion)
    perfiles: Perfil[];

}