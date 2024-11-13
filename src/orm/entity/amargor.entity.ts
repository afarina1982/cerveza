import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Cerveza } from "./cerveza.entity";

@Entity({ name: "Amargor" })
export class Amargor {
    @PrimaryColumn({ name: 'id' })
    public id: string;

    @Column({ name: 'nivel' })
    public nivel: string;

    @Column({ name: 'descripcion' })
    public descripcion: string;

    @OneToMany(() => Cerveza, c => c.amargor)
    cervezas: Cerveza[];
}
