import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Cerveza } from './cerveza.entity';
import { Usuario } from './usuario.entity';
import { estadoPedidos } from '../../enum/estado-pedidos';
import { Perfil } from './perfil.entity';
import { Direccion } from './datos_envio.entity';

@Entity({ name: 'Pedido' })
export class Pedido {

    @PrimaryColumn({ name: 'id' })
    public id: number;

    @Column({ name: 'estado' })
    public estado: estadoPedidos;

    @Column({ name: 'fecha_ingreso' })
    public fecha_ingreso: Date;

    @Column({ name: 'direccion_entrega' })
    public direccion_entrega: string;

    @Column({ name: 'rut_comprador' })
    public rut_comprador: string;

    @Column({ name: 'fecha_entrega' })
    public fecha_entrega: Date;

    @ManyToOne(() => Usuario, u => u.pedidos)
    @JoinColumn({ name: 'rut_comprador' })
    usuario: Usuario;

    @OneToMany(() => Perfil, p => p.pedidos)
    perfiles: Perfil[];


    @ManyToMany(() => Cerveza, c => c.pedidos)
    @JoinTable({
        name: 'Pedido_Cerveza',
        joinColumn: { name: 'id_pedido', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_cerveza', referencedColumnName: 'id' }
    })
    pedidocerveza: Cerveza[];

    @ManyToOne(() => Direccion, d => d.pedidos)
    @JoinColumn({ name: 'direccion_entrega' })
    direccion: Direccion;

}