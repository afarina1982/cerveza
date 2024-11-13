import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Pedido } from './pedido.entity';
import { Formulario } from './formulario.entity';
import { TiposPersonaje } from './tipos_personaje.entity';
import { TipoSuscripcion } from "src/enum/tipo-suscripcion";
import { PersonajeCerveza } from "src/enum/personajes";
import { Suscripcion } from './suscripcion.entity';



@Entity({ name: 'Perfil' })
export class Perfil {
  @PrimaryColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'id_personaje' })
  public nombre: PersonajeCerveza;

  @Column({ name: 'historialPedidos' })
  public historialPedidos?: Pedido[];

  @Column({ name: 'suscripcion', nullable: true })
  public suscripcion?: TipoSuscripcion;

  @Column('json',{ name: 'recomendaciones', nullable: true })
  public recomendaciones?: any[];

  @Column({ type: 'json',name: 'formularioPreferencias' })
  public formularioPreferencias?: any;

  @Column({ name: 'nivelUsuario' })
  public nivelUsuario: string;

  @OneToMany(() => Usuario, u => u.id_perfil)
  usuarios: Usuario[];

  @ManyToOne(() => TiposPersonaje, tp => tp.perfiles)
  tipos_personaje: TiposPersonaje;

  @ManyToOne(() => Pedido, p => p.id)
  @JoinColumn({ name: 'historialPedidos' })
  pedidos: Pedido[];

  @ManyToOne(() => Formulario, f => f.id)
  @JoinColumn({ name: 'id' })
  formulario: Formulario[];

  @ManyToOne(() => Suscripcion, s => s.id)
  @JoinColumn({ name: 'tipoSuscripcion' })
  suscripciones: Suscripcion[];

}