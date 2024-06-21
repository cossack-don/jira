import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Tasks} from "./tasks.entity";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Tasks)
        private todoRepository: Repository<Tasks>
    ) {
    }


    async updateTaskById(id, list): Promise<any> {
        console.log(id, list, 'fff')
        const task = await this.todoRepository.findOne({where: {id: id}})

        task.list = list

        return this.todoRepository.save(task)
    }

    async getById(id): Promise<any> {
        // id task
        const res = await this.todoRepository.find({where: {idBoard: id}})

        return {
            id: id,
            list: res
        }

    }
}
