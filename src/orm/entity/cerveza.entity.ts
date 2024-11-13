import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Proveedor } from './proveedor.entity';
import { TiposCerveza } from "src/orm/entity/tipos_cerveza.entity";
import { Amargor } from './amargor.entity';
import { Formato } from './formato.entity';
import { Pedido } from './pedido.entity';
import { Comuna } from './comuna.entity';
import { Suscripcion } from './suscripcion.entity';



@Entity({ name: "Cerveza" })
export class Cerveza {

  @PrimaryColumn({ name: 'id' })
  public id: number; //autogenerado

  @Column({ name: 'nombre' })
  public nombre: string;

  @Column({ name: 'marca' })
  public marca: string;

  @Column({ name: 'id_tipo' })
  public id_tipo: number;

  @Column({ name: 'stock' })
  public stock: number;

  @Column({ name: 'descripcion' })
  public descripcion: string;


  @Column({ name: 'precio' })
  public precio: number;

  @Column({ name: 'id_proveedor' })
  public id_proveedor: number;

  @Column({ name: 'id_amargor' })
  public id_amargor: number;

  @Column({ name: 'graduacion' })
  public graduacion: string;

  @Column({ name: 'id_formato' })
  public id_formato: Formato;

  @Column({ name: 'imagen' })
  public imagen: string;

  @ManyToOne(() => Proveedor)
  @JoinColumn({ name: 'id_proveedor' })
  proveedor: Proveedor;

  @ManyToOne(() => TiposCerveza)
  @JoinColumn({ name: 'id_tipo' })
  tipo: TiposCerveza;

  @ManyToOne(() => Amargor)
  @JoinColumn({ name: 'id_amargor' })
  amargor: Amargor;

  @ManyToOne(() => Formato)
  @JoinColumn({ name: 'id_formato' })
  formato: Formato;

  @ManyToMany(() => Pedido, p => p.id)
  pedidos: Pedido[];

  @ManyToMany(() => Comuna, c => c.id)
  @JoinColumn({ name: 'id_comuna', referencedColumnName: 'id' })
  comuna: Comuna[];

  @ManyToMany(() => Suscripcion, s => s.id)
  @JoinColumn({ name: 'id_suscripcion', referencedColumnName: 'id' })
  suscripcion: Suscripcion[];

}
