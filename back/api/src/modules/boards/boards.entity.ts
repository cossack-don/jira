import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Boards {
    @PrimaryGeneratedColumn()
    id: number


    @Column()
    title: string

}