import {Controller, Delete, Get, Post, Param, Body} from '@nestjs/common';
import {BoardsService} from './boards.service';
import {
    ApiOperation,
    ApiResponse, ApiBody,
} from '@nestjs/swagger';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {
    }


    @Get()
    getList(): string {
        return this.boardsService.getList();
    }

    @Get('/:id')
    getById(@Param('id') id: string): string {
        return this.boardsService.getById(id);
    }

    @Delete('/:id')
    deleteById(@Param('id') id: string): string {
        return this.boardsService.deleteById(id);
    }


    @ApiOperation({description: "Создание Board"})
    @ApiResponse({
        status: 200,
        description: 'Все ок'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                    example: 'value',
                }
            }
        }
    })
    @Post()
    createItem(@Body('title') title: string) {
        return this.boardsService.createItem(title);
    }

}
