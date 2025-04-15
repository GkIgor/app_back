import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.create.entity';
import { User } from '../../class/user.class';

@Injectable()
export class MaintenanceUsersService /* extends Helper */ {
  constructor(private readonly usersRepository: Repository<UserEntity>) {
    // super()
    // UtilsDate.formateDate()
  }

  async create(user: User): Promise<UserEntity> {
    return this.usersRepository.save(user);
  }

  async findOne(id: number): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async disabled(id: number): Promise<UserEntity | null> {}

  async promove(id: number): Promise<UserEntity | null> {
    // 1 requisito (status = não bloqueado) 2 entidades
  }
}
