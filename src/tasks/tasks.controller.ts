/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  getOneTask(id: number) {
    return `${id}`;
  }

  @Patch()
  updateTask(id: number) {
    return `${id}`;
  }

  @Delete()
  deleteTask(id: number) {
    return `${id}`;
  }
}
