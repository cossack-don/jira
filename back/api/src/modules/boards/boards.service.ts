import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Boards} from "./boards.entity";

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Boards)
        private todoRepository: Repository<Boards>
    ) {
    }
    
    getList(): any {
        return this.todoRepository.find()
    }

    getById(id): any {
        return {
            id: `GET by id board - id = ${id}`
        }
    }

    deleteById(id): any {
        return {
            id: `DELETE by id board - id = ${id}`
        }
    }


    createItem(title: string) {
        const boards = new Boards()
        boards.title = title

        return this.todoRepository.save(boards)
    }
}
