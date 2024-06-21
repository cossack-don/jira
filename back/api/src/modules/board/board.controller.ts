import {Controller, Delete, Get, Post, Param, Body, Patch} from '@nestjs/common';
import {BoardService} from './board.service';
import {
    ApiOperation,
    ApiResponse, ApiBody,
} from '@nestjs/swagger';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {
    }


    @Get()
    getList(): string {
        return this.boardService.getList();
    }

    //
    // @Get('/:id')
    // getById(@Param('id') id: any): any {
    //     return this.boardService.getById(Number(id));
    // }

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
    async updateTaskById(@Param('id') id: string, @Body('list') list: string) {

        return this.boardService.updateTaskById(Number(id), list);
    }

    //
    // @Delete('/:id')
    // deleteById(@Param('id') id: string): string {
    //     return this.boardsService.deleteById(id);
    // }
    //
    //
    // @ApiOperation({description: "Создание Board"})
    // @ApiResponse({
    //     status: 200,
    //     description: 'Все ок'
    // })
    // @ApiResponse({
    //     status: 403,
    //     description: 'Forbidden'
    // })
    // @ApiBody({
    //     schema: {
    //         type: 'object',
    //         properties: {
    //             title: {
    //                 type: 'string',
    //                 example: 'value',
    //             }
    //         }
    //     }
    // })
    // @Post()
    // createItem(@Body('title') title: string) {
    //     return this.boardsService.createItem(title);
    // }

}
