import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDTO } from './dto';
import { AddVideoDTO } from './dto/addVideo.dto';

@Injectable({})
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(dto: EditUserDTO, tokenEmail: string) {
    const {
      avatarUrl,
      email,
      description,
      from,
      name,
      username,
    } = dto;

    const user = await this.prisma.user.findUnique({
      where: {
        email: tokenEmail,
      },
    });

    if (!user)
      throw new ForbiddenException('Credentilas incorrect');

    try {
      const updatedUser = await this.prisma.user.update({
        where: {
          email: tokenEmail,
        },
        include: {
          myList: true,
        },
        data: {
          avatarUrl,
          description,
          from,
          username,
          name,
        },
      });

      delete updatedUser.hash;

      return updatedUser;
    } catch (ex) {
      if (ex instanceof PrismaClientKnownRequestError) {
        if (ex.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
        throw ex;
      }
    }
  }

  async addVideo(
    { strapiVideoId }: AddVideoDTO,
    tokenEmail: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: tokenEmail,
      },
      include: {
        myList: true,
      },
    });

    const { avatarUrl, description, from, username, name } =
      user;

    try {
      await this.prisma.user.update({
        where: {
          email: tokenEmail,
        },
        data: {
          avatarUrl,
          description,
          from,
          username,
          name,
          myList: {
            connectOrCreate: {
              where: {
                strapiId: strapiVideoId,
              },
              create: {
                strapiId: strapiVideoId,
              },
            },
          },
        },
      });
    } catch (ex) {
      throw new PreconditionFailedException(
        'Error trying to include a video in your list',
      );
    }
  }

  async removeVideo(
    { strapiVideoId }: AddVideoDTO,
    tokenEmail: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: tokenEmail,
      },
      include: {
        myList: true,
      },
    });

    const {
      avatarUrl,
      description,
      from,
      username,
      name,
      myList,
    } = user;

    const isInMyList = myList.find(
      (v) => v.strapiId === strapiVideoId,
    );
    if (!isInMyList) {
      throw new NotFoundException(
        'Video not found in your list',
      );
    }

    try {
      await this.prisma.user.update({
        where: {
          email: tokenEmail,
        },
        data: {
          avatarUrl,
          description,
          from,
          username,
          name,
          myList: {
            disconnect: {
              strapiId: strapiVideoId,
            },
          },
        },
      });
    } catch (ex) {
      throw new PreconditionFailedException(
        'Error trying to delete a video from yout list.',
      );
    }
  }
}
