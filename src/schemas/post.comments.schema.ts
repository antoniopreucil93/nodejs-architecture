import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const PostCommentSchema = new GraphQLObjectType({
	name: 'PostComment',
	fields: {
		id: { type: GraphQLInt },
		postId: { type: GraphQLInt },
		comment: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
	},
});

export { PostCommentSchema };
