import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()

export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre_usuario: string;
    @Column('text')
    email: string;
    @Column('text')
    avatar: string;
    @Column('text')
    contrasena: string;
    @Column('boolean')
    isActive: boolean;
    @Column('text')
    clave_activacion: string;
    @Column('text')
    grupo_usuarios: string;
    @Column('text')
    apiToken: string;
    @Column('text')
    version: string;
    @Column('date')
    fecha_creacion: Date;
    @Column('date')
    ultima_fecha_modificacion: Date;
   
   constructor(){}
}





