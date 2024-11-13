import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Region } from "./region.entity";
import { Cerveza } from "./cerveza.entity";
import { Direccion } from "./datos_envio.entity";
import { Proveedor } from "./proveedor.entity";


@Entity({ name: "Comuna" })
export class Comuna {

  @PrimaryColumn()
  public id: number; //autogenerado

  @Column()
  public nombre: string;

  @Column()
  public id_region: string;

  @ManyToOne(() => Region)
  @JoinColumn({ name: 'id_region' })
  region: Region;

  @ManyToMany(() => Cerveza)
  @JoinTable({
    name: 'Cerveza_Comuna',
    joinColumn: { name: 'id_comuna', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_cerveza', referencedColumnName: 'id' }
  })
  origenCerveza: Cerveza[];


@OneToMany(() => Proveedor, p => p.id_comuna)
  proveedores: Proveedor[];
}
