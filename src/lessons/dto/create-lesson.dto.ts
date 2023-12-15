import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
    @ApiProperty({
        example: 'Музыка',
        description: 'Название урока',
    })
    @IsString()
    name: string;

    @ApiProperty({
        example: 'music',
        description: 'код урока',
    })
    @IsString()
    code: string;
}
