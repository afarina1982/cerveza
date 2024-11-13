import { Entity,PrimaryColumn, Column, OneToMany } from "typeorm";
import { Cerveza } from "./cerveza.entity";

@Entity({ name: 'tipo_cerveza' })
export class TiposCerveza {

  @PrimaryColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'nombre' })
  public nombre: string;

  @Column({ name: 'descripcion' })
  public descripcion: string;

  @Column({ name: 'categoria' })
  public categoria: string;

  @Column({ name: 'color' })
  public color: string;

  @OneToMany(() => Cerveza, cerveza => cerveza.id_tipo)
  cervezas: Cerveza[];
}