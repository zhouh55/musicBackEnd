import { Column, Entity } from 'typeorm';
import { BaseEntity } from "./baseModel";

@Entity('User')
export class User extends BaseEntity {
    @Column()
    name: string;

    @Column()
    account: string;

    @Column()
    password: string;
}