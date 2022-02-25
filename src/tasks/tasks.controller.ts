/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get() 
    getAllTasks() {
        return ;
    }

    @Post()
    createtask() {
        return ;
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
        return `${id}`
    }
}
