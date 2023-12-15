import { ApiProperty } from '@nestjs/swagger';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @ApiProperty({
        example: 1,
        description: 'id пользователя',
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: "Александр",
        description: 'Имя пользователя',
    })
    @Column({ length: 100 })
    name: string;

    @ApiProperty({
        example: "test@test.ru",
        description: 'E-mail пользователя',
    })
    @Column({ length: 30 })
    email: string;

    @OneToMany(() => Evaluation, evaluation => evaluation.user)
    evaluations: Evaluation[];
}