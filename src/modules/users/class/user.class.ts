import { UserEntity } from '../entities/user.create.entity';

export class User {
  readonly name: string;
  readonly email: string;
  readonly password?: string;
  readonly roles: string[];
  readonly status: string;
  readonly id?: number;
  readonly createdAt?: Date;
  readonly createdBy?: string;
  readonly updatedAt?: Date;
  readonly updatedBy?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(data: any) {
    Object.assign(this, data);
  }

  static from(data: UserEntity): User {
    return new User({
      name: data.name,
      email: data.email,
      roles: [],
      status: '',
      id: data.id,
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      updatedAt: data.updatedAt,
      updatedBy: data.updatedBy,
    });
  }
}
