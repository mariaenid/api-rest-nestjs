import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from '../entities';


export class CreateTaskDto {
  name: string;
  description: string;
  status: TaskStatus;
  label?: string[];
}

@Controller('tasks')
export class TasksController {

  constructor(private readonly service: TasksService) {
  }


  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.service.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Put(':id')
  async update(@Body() labels: string[], @Param('id') id) {
    return this.service.updateLabel(id, labels);
  }

  @Get(':label')
  async getTasksByLabel(@Param('label') label: string) {
    return this.service.getTasksByLabel(label)
  }

}
