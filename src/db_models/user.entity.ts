import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { IsOptional } from "class-validator";


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

}