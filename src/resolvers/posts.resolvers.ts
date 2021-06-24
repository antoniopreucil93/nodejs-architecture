import {
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
} from 'graphql';
import { PostSchema, InputPostSchema } from '../schemas';
import { PostService } from '../services';

const postService = new PostService();

const query = new GraphQLObjectType({
	name: 'postQuery',
	fields: {
		getAllPosts: {
			type: new GraphQLList(PostSchema),
			resolve: async () => postService.getAll(),
		},
	},
});

const mutation = new GraphQLObjectType({
	name: 'postMutation',
	fields: {
		storePost: {
			type: PostSchema,
			args: {
				title: { type: new GraphQLNonNull(GraphQLString) },
				text: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve: async (_, inputPayload) => postService.store(inputPayload),
		},
	},
});

const gqlSchema: GraphQLSchema = new GraphQLSchema({
	query,
	mutation,
});

export default gqlSchema;
