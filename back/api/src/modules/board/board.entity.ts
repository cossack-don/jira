import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    list: number

    @Column()
    idBoard: number
}