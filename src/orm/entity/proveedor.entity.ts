import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Comuna } from './comuna.entity';
import { Cerveza } from './cerveza.entity';


@Entity({name: "Proveedor"})
export class Proveedor{

  @PrimaryColumn({name:''})
  public id: number; //autogenerado

  @Column({name:'nombre'})
  public nombre: string;

  @Column({name:'id_comuna'})
  public id_comuna: number;

  @Column({name:'contacto'})
  public contacto: string;

  @Column({name:'telefono'})
  public telefono: string; 

  @Column({name:'correo_electronico'})
  public correo_electronico: string;

  @ManyToOne(() => Comuna)
  @JoinColumn({ name: 'id_comuna' })
  comuna: Comuna;

  @OneToMany(() => Cerveza, cerveza => cerveza.proveedor)
  cervezas: Cerveza[];

}