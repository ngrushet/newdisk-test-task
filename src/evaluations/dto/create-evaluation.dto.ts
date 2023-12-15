import { IsNumber } from "@nestjs/class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateEvaluationDto {
    @ApiProperty({
        example: 1,
        description: 'id пользователя',
    })
    @IsNumber()
    user_id: number

    @ApiProperty({
        example: 100,
        description: 'Оценка пользователя по уроку',
    })
    @IsNumber()
    score: number
}
