import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './user.entity';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.todoRepository.findOne(id);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }

  async create(todo: Todo): Promise<InsertResult> {
    return await this.todoRepository.insert(todo);
  }

  async update(todo: Todo, id: string): Promise<UpdateResult> {
    return await this.todoRepository.update(id, todo);
  }
}
