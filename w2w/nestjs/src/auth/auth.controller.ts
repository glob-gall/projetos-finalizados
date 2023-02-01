import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDTO, SignupDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: SigninDTO) {
    return this.authService.signin(dto);
  }

  @Post('signup')
  signup(@Body() dto: SignupDTO) {
    return this.authService.signup(dto);
  }
}
