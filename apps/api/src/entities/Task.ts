import { BaseEntity } from "./BaseEntity"
import { Column, Entity } from 'typeorm';

export enum TaskStatus {
  TO_DO = 'to_do',
  IN_PROGRESS = 'in_progress',
  DONE = 'done'
}

@Entity()
export class Task extends BaseEntity {
  @Column()
  name: string

  @Column()
  description: string

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.TO_DO
  })
  status: TaskStatus

  @Column("text", { array: true, nullable: true })
  labels: string[];
}


