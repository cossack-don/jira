import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

// Boards module

import {BoardsModule} from "./modules/boards/boards.module";
import {BoardModule} from "./modules/board/board.module";
import {TasksModule} from "./modules/tasks/tasks.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: './database/database.sqlite',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }), BoardsModule, BoardModule, TasksModule],

})
export class AppModule {
}
