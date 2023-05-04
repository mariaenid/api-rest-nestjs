
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'nestjs',
      entities: [/*HERE Entities*/],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([/*HERE Entities*/]),
  ],
  exports: [TypeOrmModule, OrmModule],
})
export class OrmModule { }
