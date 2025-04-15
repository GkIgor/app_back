import { Body, Controller, Post } from '@nestjs/common';
import { MaintenanceUsersService } from '../services/maintenance/maintenance.users.service';
import { CreateUserDto } from '../dtos/create.user.dto';
import { User } from '../class/user.class';

@Controller('users')
export class UsersPostController {
  constructor(
    private readonly maintenanceUsersService: MaintenanceUsersService,
  ) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return User.from(await this.maintenanceUsersService.create(user));
  }
}
