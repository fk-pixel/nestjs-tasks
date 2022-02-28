/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('/signup')
    signup(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signup(authCredentialsDto);
    }

    @Post('/login')
    login(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
      return this.authService.login(authCredentialsDto);
    }
}
