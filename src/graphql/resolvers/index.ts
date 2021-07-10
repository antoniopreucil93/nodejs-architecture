import postSchema from './posts.resolvers';
import postComment from './post-comments.resolver';

export const graphqlConfig = {
	schema: postSchema,
	rootValue: () => 'hello',
	graphiql: true,
};
