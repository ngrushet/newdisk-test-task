import { IsString } from "@nestjs/class-validator";

export class CreateLessonDto {
    @IsString()
    name: string;

    @IsString()
    code: string;
}
