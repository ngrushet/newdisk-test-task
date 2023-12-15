import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    create(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.save(createUserDto);
    }

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: number) {
        return this.userRepository.findOneBy({ id: id });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository
            .createQueryBuilder()
            .update(User) // Замените "User" на вашу сущность пользователя
            .set(updateUserDto) // Используйте метод set для указания обновленных значений
            .where('id = :id', { id })
            .execute();
    }

    remove(id: number) {
        return this.userRepository.delete(id);
    }
}
