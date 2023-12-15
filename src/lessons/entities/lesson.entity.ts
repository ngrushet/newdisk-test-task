import { ApiProperty } from '@nestjs/swagger';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Lesson {
    @ApiProperty({
        example: 1,
        description: 'id урока',
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: "музыка",
        description: 'Название урока',
    })
    @Column({ length: 100 })
    name: string;

    @ApiProperty({
        example: "music",
        description: 'Код урока',
    })
    @Column({ length: 20 })
    code: string;

    @ApiProperty({
        example: [],
        description: 'Оценки пользователей за урок'
    })
    @OneToMany(() => Evaluation, evaluation => evaluation.lesson)
    evaluations: Evaluation[];
}