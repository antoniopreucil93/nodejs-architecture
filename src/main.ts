import express, { Application } from 'express';
import { createConnection } from 'typeorm';
import { Post } from './database/entities/posts.entity';
import routes from './rest/routers';
import { graphqlHTTP } from 'express-graphql';
import { graphqlConfig } from './graphql/resolvers';

const app: Application = express();

(async () => {
	const db = await createConnection({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'root',
		password: 'example',
		database: 'blog_development',
		entities: [__dirname + '/../**/*.entity.js'],
		synchronize: true,
		logging: false,
	});

	app.use('/api', routes);

	app.use('/graphql', graphqlHTTP(graphqlConfig));
})();

export default app;
