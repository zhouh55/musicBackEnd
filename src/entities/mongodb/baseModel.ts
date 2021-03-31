import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    createdAt?: string
}