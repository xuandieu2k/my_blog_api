import { IsString, IsEmail, IsEnum, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @Length(1, 50)
    username: string;

    @IsString()
    @Length(6, 255)
    password: string;

    @IsEmail()
    @Length(1, 100)
    email: string;

    @IsEnum(['admin', 'editor', 'user'])
    @IsOptional()
    role?: 'admin' | 'editor' | 'user';

    @IsString()
    @IsOptional()
    @Length(0, 255)
    avatar?: string;
}