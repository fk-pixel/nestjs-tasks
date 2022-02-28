/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Task } from "./entity/task.entity";

@EntityRepository(Task)
export class TasksRepository  extends Repository<Task>{

}