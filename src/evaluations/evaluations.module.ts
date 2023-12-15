import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from './entities/evaluation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation])],
  controllers: [],
  providers: [EvaluationsService],
  exports: [EvaluationsService]
})
export class EvaluationsModule { }
