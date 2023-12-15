import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 30 })
    email: string;

    @OneToMany(() => Evaluation, evaluation => evaluation.user)
    evaluations: Evaluation[];
}