import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Cerveza } from "./cerveza.entity";

@Entity({ name: "Formato" })
export class Formato {
    @PrimaryColumn({ name: 'id' })
    public id: string;
    @Column({ name: 'descripcion' })
    public descripcion: string;

    @OneToMany(type => Cerveza, cerveza => cerveza.formato)
    cervezas: Cerveza[];    
}