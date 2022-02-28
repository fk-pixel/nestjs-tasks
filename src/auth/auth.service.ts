/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';
import { UsersRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private userRepo: UsersRepository,
    ) {}

    async signup(authCredentialsDto:AuthCredentialsDto): Promise<void> {
        return this.userRepo.createUser(authCredentialsDto);
    }
}
