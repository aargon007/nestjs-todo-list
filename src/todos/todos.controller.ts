import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { MongoIdValidationPipe } from '../common/pipes/mongo-id-validation.pipe';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll(@Query('completed') completed?: string) {
    if (completed !== undefined) {
      const isCompleted = completed === 'true';
      return this.todosService.findByCompleted(isCompleted);
    }
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdValidationPipe) id: string) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', MongoIdValidationPipe) id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', MongoIdValidationPipe) id: string) {
    return this.todosService.remove(id);
  }
}
