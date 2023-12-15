import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ValidateNested } from '@nestjs/class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ValidateNested()
    readonly createUserDto: CreateUserDto;
}