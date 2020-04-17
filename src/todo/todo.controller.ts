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
import { Todo } from './interfaces/todo.entity';
import { TodoService } from './todo.service';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    return await this.todoService.findOne(id);
  }

  @Post()
  async create(@Body() todo: Todo): Promise<InsertResult> {
    return await this.todoService.create(todo);
  }

  @Put(':id')
  async update(
    @Body() todo: Todo,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.todoService.update(todo, id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.todoService.remove(id);
  }
}
