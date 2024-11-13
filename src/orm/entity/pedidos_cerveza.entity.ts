import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'Pedido_Cerveza' })
export class Pedido_Cerveza {

    @PrimaryColumn({ name: 'id_pedido' })
    public id_pedido: number;

    @PrimaryColumn({ name: 'id_cerveza' })
    public id_cerveza: number;

    @Column({ name: 'cantidad' })
    public cantidad: number;
}

