/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [
        {
            title:"Eriste makinesi", 
            content: "Eriste makinesi icin fiya arastir"
        }
    ];

    getAllTasks() {
        return this.tasks;
    }
}
