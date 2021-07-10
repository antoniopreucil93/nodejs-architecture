import { ConnectionOptions } from 'typeorm';

export const postgresConfig: ConnectionOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'root',
	password: 'example',
	database: 'blog_development',
	entities: [__dirname + '/../**/*.entity{.ts,.js}'],
	synchronize: true,
	logging: false,
};
