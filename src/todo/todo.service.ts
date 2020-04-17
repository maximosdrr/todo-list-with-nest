import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './interfaces/todo.entity';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.todoRepository.delete(id);
  }

  create(todo: Todo): Promise<InsertResult> {
    return this.todoRepository.insert(todo);
  }

  update(todo: Todo, id: string): Promise<UpdateResult> {
    return this.todoRepository.update(id, todo);
  }
}
