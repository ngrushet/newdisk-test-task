import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { EvaluationsModule } from 'src/evaluations/evaluations.module';

@Module({
    imports: [TypeOrmModule.forFeature([Lesson]), EvaluationsModule],
    controllers: [LessonsController],
    providers: [LessonsService],
})
export class LessonsModule {}
