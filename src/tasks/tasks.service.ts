/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;

        // define a temorary array to hold the result
        let tasks = this.getAllTasks();
        // do something with status
        if(status) {
            tasks = tasks.filter((task) => task.status === status);
        }
        // do somethinh with search
        if(search) {
            tasks = tasks.filter((task) => {
                if (task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search)) {
                    return true
                }
                return false;
            });
        }
        // return final result
        return tasks;
    }

    getOneTask(id:string): Task {

        // try to get task
        const task = this.tasks.find((task) => task.id === id);
        // if not found, throw an error (404 not found)
        if (!task) {
            throw new NotFoundException(`Task with "${id}" not found`);
        } 
        // otherwise, return the found task
        return task;
    };

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        
        this.tasks.push(task);
        return task;
    }

    deleteTask(id:string): void {
        const foundedTask = this.getOneTask(id);
        this.tasks = this.tasks.filter((task) => task.id !== foundedTask.id);
    }

    updateTaskStatus(id:string, status: TaskStatus) {
        const task = this.getOneTask(id);
        task.status = status;
        return task;
    }
}
