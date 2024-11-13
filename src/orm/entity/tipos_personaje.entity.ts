import { Entity, PrimaryColumn, Column } from "typeorm";
import { PersonajeCerveza } from "src/enum/personajes";
import { Perfil } from "./perfil.entity";
import { OneToMany } from "typeorm";

@Entity({ name: 'personaje' })
export class TiposPersonaje {
    @PrimaryColumn({ name: 'id' })
    public id: number;
    @Column({ name: 'nombre' })
    public nombre: PersonajeCerveza;
    @Column({ name: 'estilo' })
    public estilo: string;
    @Column({ name: 'atributos' })
    public atributos: string;
    @OneToMany(() => Perfil, p => p.nombre)
    perfiles: Perfil[];


    @OneToMany(() => Perfil, p => p.nombre)
    personajes: Perfil[];
}

