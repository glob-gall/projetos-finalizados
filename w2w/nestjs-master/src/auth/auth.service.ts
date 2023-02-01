import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninDTO, SignupDTO } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signin(dto: SigninDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user)
      throw new ForbiddenException('Credentilas incorrect');

    const pwMatches = await argon.verify(
      user.hash,
      dto.password,
    );
    if (!pwMatches)
      throw new ForbiddenException('Credentilas incorrect');

    return this.signToken(user.id, user.email);
  }

  async signup(dto: SignupDTO) {
    const { email, password } = dto;
    try {
      const hash = await argon.hash(password);
      const user = await this.prisma.user.create({
        data: {
          email,
          hash,
        },
      });
      delete user.hash;
      return user;
    } catch (ex) {
      if (ex instanceof PrismaClientKnownRequestError) {
        if (ex.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
        throw ex;
      }
    }
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '120m',
      secret,
    });
    return {
      access_token: token,
    };
  }
}
