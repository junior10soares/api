import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

global.users = ['marcos'];

@Injectable()
export class UsersService {
  findAll(): any[] {
    return global.users;
  }
  create(user: CreateUserDto) {
    global.users.push(user);
  }
}
