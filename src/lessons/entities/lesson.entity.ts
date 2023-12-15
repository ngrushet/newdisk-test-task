import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 20 })
    code: string;

    @OneToMany(() => Evaluation, evaluation => evaluation.lesson)
    evaluations: Evaluation[];
}