import { Module } from '@nestjs/common';
import { LessonsModule } from './lessons/lessons.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Lesson } from './lessons/entities/lesson.entity';
import { User } from './users/entities/user.entity';
import { Evaluation } from './lessons/entities/evaluation.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        LessonsModule,
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [Lesson, User, Evaluation],
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
