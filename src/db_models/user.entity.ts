import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn ,OneToOne} from "typeorm";
import { Exclude } from "class-transformer";
import { IsOptional } from "class-validator";
import {Role} from "./role.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique:true,})
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column({default:false})
    confirmed:boolean

    @OneToOne(()=>Role,(Role)=>Role.role)
    @JoinColumn({name:'role_key'})
    role:Role
}