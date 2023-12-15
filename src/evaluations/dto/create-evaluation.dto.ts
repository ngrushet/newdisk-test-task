import { IsNumber } from "@nestjs/class-validator"

export class CreateEvaluationDto {
    @IsNumber()
    user_id: number

    @IsNumber()
    score: number
}
