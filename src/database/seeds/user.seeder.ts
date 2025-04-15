import { DataSource } from 'typeorm';
import type { Seeder } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
  track?: boolean | undefined;
  public async run(
    dataSource: DataSource,
    // factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY CASCADE;');
  }
}
