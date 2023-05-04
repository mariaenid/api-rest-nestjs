import { Inject, Injectable } from '@nestjs/common';
import { Task } from '../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './tasks.controller';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>) {
  }


  async create(arg: CreateTaskDto) {
    const metadata = this.repository.create(arg);

    return this.repository.save(metadata);
  }

  async findAll() {
    return this.repository.find();
  }

  async delete(id: string) {
    return this.repository.delete({ id })
  }

  async updateLabel(id: string, labels: string[]) {
    const task = await this.repository.findOneBy({ id });

    const currentLabel = task?.labels;

    const updatedLabels = currentLabel?.length ? [...currentLabel, ...labels] : labels;

    task.labels = updatedLabels;

    return this.repository.save(task)
  }

  /** SELECT * FROM public.task as tasks where  'label1'=ANY(tasks.labels)
 */
  async getTasksByLabel(label: string) {
    return this.repository.createQueryBuilder('task').where(
      `'${label}'=ANY(task.labels)`
    ).getMany();
  }

}
