import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Comuna } from "./comuna.entity";
import { Usuario } from "./usuario.entity";
import { ManyToOne, JoinColumn } from "typeorm";
import { Pedido } from "./pedido.entity";


@Entity({ name: 'Datos_Envio' })
export class Direccion {
    
    @PrimaryColumn({ name: 'id' })
    public id: number;

    @Column({ name: 'calle' })
    public calle: string;

    @Column({ name: 'numero' })
    public numero: number;

    @Column({ name: 'departamento' })
    public departamento?: string;



    @Column({ name: 'codigo_Postal' })
    public codigo_Postal: string;

    @Column({ name: 'rut_usuario' })
    public rut_usuario: string;

    @Column({ name: 'telefono' })
    public telefono: string;

    @Column({ name: 'correo_electronico' })
    public correo_electronico: string;

    @ManyToOne(() => Usuario, u => u.direcciones)
    @JoinColumn({ name: 'rut_usuario' })
    usuario: Usuario;

    @OneToMany(() => Pedido, p => p.direccion_entrega)
    pedidos: Pedido[];

    @ManyToOne(() => Comuna, c => c.id)
    @JoinColumn({ name: 'id_comuna' })
    comunas: Comuna;

   

}