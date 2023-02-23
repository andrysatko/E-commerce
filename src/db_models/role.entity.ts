import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {User} from "./user.entity";
import {Length} from "class-validator";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: string;
}