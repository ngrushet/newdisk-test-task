import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export class Evaluation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @CreateDateColumn()
    createdAt: Date;
}
