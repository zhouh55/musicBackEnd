import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseModel";

@Entity('api')
export class API extends BaseEntity {
    @Column()
    name: string;

    @Column()
    account: string;

    @Column()
    password: string;
}