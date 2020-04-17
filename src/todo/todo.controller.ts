import {
  Controller,
  Get,
  Body,
  Delete,
  Post,
  Param,
  Query,
  Put,
} from '@nestjs/common';
import { Todo } from './user.entity';
import { TodoService } from './todo.service';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('findAll')
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Get('findOne')
  async findOne(@Query() id: string): Promise<Todo> {
    return await this.todoService.findOne(id);
  }

  @Delete('delete')
  async remove(@Query() id: string): Promise<DeleteResult> {
    const result: DeleteResult = await this.todoService.remove(id);
    return result;
  }

  @Post('create')
  async create(@Body() todo: Todo): Promise<InsertResult> {
    const result: InsertResult = await this.todoService.create(todo);
    return result;
  }

  @Put('update')
  async update(
    @Body() todo: Todo,
    @Query('id') id: string,
  ): Promise<UpdateResult> {
    const result: UpdateResult = await this.todoService.update(todo, id);
    return result;
  }
}
