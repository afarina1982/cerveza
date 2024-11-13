import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { ActividadViernes, DescripcionAmigos, TipoComida, DestinoVacaciones, SaborBebida } from 'src/enum/preferencias-formulario';
import { Perfil } from './perfil.entity';


@Entity({ name: 'Formulario_Preferencias' })
export class Formulario {
    @PrimaryColumn({ name: 'id' })
    public id: number;
    @Column({ name: 'actividadViernes' })
    public actividadViernes: ActividadViernes;
    @Column({ name: 'descripcionAmigos' })
    public descripcionAmigos: DescripcionAmigos;
    @Column({ name: 'tipoComida' })
    public tipoComida: TipoComida;
    @Column({ name: 'destinoVacaciones' })
    public destinoVacaciones: DestinoVacaciones;
    @Column({ name: 'saborBebida' })
    public saborBebida: SaborBebida;

    @OneToMany(() => Perfil, perfil => perfil.formulario)
    perfil: Perfil;

}