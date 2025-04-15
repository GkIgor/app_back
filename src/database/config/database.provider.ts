import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.DATABASE_PORT || '5432';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    ca: process.env.CERT,
  },
  entities: [],
  migrations: ['dist/migration/**/*.js'],
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
});

export const dataBaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      await AppDataSource.initialize();
      return AppDataSource;
    },
  },
];
