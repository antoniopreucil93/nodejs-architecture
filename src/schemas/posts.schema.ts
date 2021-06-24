import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const PostSchema = new GraphQLObjectType({
	name: 'Post',
	fields: {
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		text: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
	},
});

const InputPostSchema = new GraphQLObjectType({
	name: 'InputPost',
	fields: {
		title: { type: GraphQLString },
		text: { type: GraphQLString },
	},
});

export { PostSchema, InputPostSchema };
