import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsOptional()
  readonly firstName?: string;

  @ApiProperty()
  @IsOptional()
  readonly lastName?: string;

  @ApiProperty()
  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;

  @ApiProperty({
    description: 'Password must be at least 6 characters long',
  })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @ApiProperty({ description: 'Confirmed Password must match Password' })
  @IsString()
  @Exclude({ toPlainOnly: true })
  confirmedPassword: string;
}
