import {Controller, Delete, Get, Post, Param, Body, Patch} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {
    ApiOperation,
    ApiResponse, ApiBody,
} from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {
    }

    @Get('/:id')
    getById(@Param('id') id: any): any {
        return this.tasksService.getById(Number(id));
    }

    @Patch('/:id') // обновляем конкретно одно поле
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                list: {
                    type: 'number',
                    example: 2,
                }
            }
        }
    })
    async updateTaskById(@Param('id') id: string, @Body('list') list: any) {
        return this.tasksService.updateTaskById(Number(id), list);
    }


}
