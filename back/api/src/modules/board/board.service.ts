import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Board} from "./board.entity";

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private todoRepository: Repository<Board>
    ) {
    }

    getList(): any {
        return []
    }

    //
    // async getById(id): Promise<any> {
    //     // id board
    //     const res = await this.todoRepository.find({where: {idBoard: id}})
    //
    //     return {
    //         id: id,
    //         list: res
    //     }
    //
    // }

    async updateTaskById(id, list): Promise<any> {
        const task = await this.todoRepository.findOne({where: {id: id}})

        task.list = list

        return this.todoRepository.save(task)
    }

    //
    // deleteById(id): any {
    //     return {
    //         id: `DELETE by id board - id = ${id}`
    //     }
    // }
    //
    //
    // createBoard(title: string) {
    //     const board = new Board()
    //     board.title = title
    //
    //     return this.todoRepository.save(board)
    // }
}
