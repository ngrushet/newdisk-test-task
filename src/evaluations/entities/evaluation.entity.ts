import { ApiProperty } from '@nestjs/swagger';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { User } from 'src/users/entities/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm';

@Entity()
export class Evaluation {
    @ApiProperty({
        example: 1,
        description: 'id оценки',
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 100,
        description: 'Оценка за урок',
    })
    @Column()
    score: number;

    @ApiProperty({
        example: '2023-12-16 00:35:39.473224',
        description: 'Время выставления оценки',
    })
    @CreateDateColumn({ select: false })
    createdAt: Date;

    @ManyToOne(() => Lesson, (lesson) => lesson.evaluations)
    lesson: Lesson;

    @ManyToOne(() => User, (user) => user.evaluations)
    user: User;
}
