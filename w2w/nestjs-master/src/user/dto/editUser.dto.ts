import { IsEmail, IsNotEmpty } from 'class-validator';

export class EditUserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  avatarUrl: string;

  from: string;

  description: string;
}
