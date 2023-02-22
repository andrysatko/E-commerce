import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {User} from "./user.entity";
import {Length} from "class-validator";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Length(1,10)
    @Column()
    role: string;

    @OneToOne(()=>User,(user)=>user.role)
    user:User
}