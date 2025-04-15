import { BaseEntity } from 'src/shared/entities/base/base.entity';
import { Column } from 'typeorm';

export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
