import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        example: 'Александр',
        description: 'Имя пользователя',
    })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({
        example: 'test@test.ru',
        description: 'E-mail пользователя',
    })
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}
