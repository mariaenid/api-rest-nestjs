import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { OrmModule } from "../orm/orm.module";
import { TasksModule } from "../tasks/tasks.module";

@Module({
  imports: [
    OrmModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
