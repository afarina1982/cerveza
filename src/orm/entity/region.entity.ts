import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import { Comuna } from "./comuna.entity";

@Entity({name: "Region"})
export class Region{

  @PrimaryColumn({name:'id'})
  public id: string;

  @Column({name:'nombre'})  
  public nombre: string;

@OneToMany(() => Comuna, comuna => comuna.region)
  comunas: Comuna[];


}
