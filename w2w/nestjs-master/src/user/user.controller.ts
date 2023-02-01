import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '.prisma/client';
import { EditUserDTO } from './dto';
import { UserService } from './user.service';
import { AddVideoDTO } from './dto/addVideo.dto';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/me')
  getMe(@GetUser('') user: User) {
    return user;
  }

  @Put('/me')
  editUser(
    @Body() dto: EditUserDTO,
    @GetUser('') user: User,
  ) {
    return this.userService.editUser(dto, user.email);
  }

  @Put('/me/addvideo')
  addVideo(
    @Body() dto: AddVideoDTO,
    @GetUser('') user: User,
  ) {
    return this.userService.addVideo(dto, user.email);
  }

  @Delete('/me/removevideo')
  removeVideo(
    @Body() dto: AddVideoDTO,
    @GetUser('') user: User,
  ) {
    return this.userService.removeVideo(dto, user.email);
  }
}
