import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { DeepPartial, Repository } from 'typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EvaluationsService {

    constructor(
        @InjectRepository(Evaluation)
        private evaluationsRepository: Repository<Evaluation>
    ) { }

    create(lessonId: number, createEvaluationDto: CreateEvaluationDto) {
        const { user_id, score } = createEvaluationDto
        const evaluationData: DeepPartial<Evaluation> = {
            user: { id: user_id },
            lesson: { id: lessonId },
            score: score
        };

        return this.evaluationsRepository.save(evaluationData)
            .then(new_eval => {
                const { createdAt, user,lesson, ...answer } = new_eval;
                return {
                    user_id: user.id,
                    ...answer
                };
            });
    }

    findAll() {
        return this.evaluationsRepository.find()
    }

    findOne(id: number) {
        return this.evaluationsRepository.findOneBy({ id: id })
    }

    update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
        return `This action updates a #${id} evaluation`;
    }

    remove(id: number) {
        return `This action removes a #${id} evaluation`;
    }
}
