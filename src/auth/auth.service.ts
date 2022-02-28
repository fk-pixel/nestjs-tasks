/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';
import { UsersRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepo: UsersRepository,
        private jwtService: JwtService,
    ) {}

    async signup(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.usersRepo.createUser(authCredentialsDto);
    }

    async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        const { username, password } = authCredentialsDto;
        const user = await this.usersRepo.findOne({ username });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          const payload: JwtPayload = { username };
          const accessToken: string = await this.jwtService.sign(payload);
          return { accessToken };
        } else {
          throw new UnauthorizedException('Please check your login credentials');
        }
      }
}
