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
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;
    
    @CreateDateColumn({select: false})
    createdAt: Date;

    @ManyToOne(() => Lesson, lesson => lesson.evaluations)
    lesson: Lesson;

    @ManyToOne(() => User, user => user.evaluations)
    user: User;
}
