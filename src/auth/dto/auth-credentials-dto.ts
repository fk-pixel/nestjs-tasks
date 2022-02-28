/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
export class AuthCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(12)
    username:string; 
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password is too weak' })
    password:string; 
}