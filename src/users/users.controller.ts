import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('list')
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    if (!user.email || user.name)
      throw new BadRequestException('Need email and name');
    return this.usersService.create(user);
  }
}
