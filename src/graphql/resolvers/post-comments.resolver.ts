import { GraphQLList, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { PostCommentSchema } from '../schemas';
import { PostCommentService } from '../../services/post-comments.service';

const postCommentService = new PostCommentService();

const query = new GraphQLObjectType({
	name: 'postCommentQUery',
	fields: {
		getPostComments: {
			type: new GraphQLList(PostCommentSchema),
			resolve: async param => postCommentService.getPostComments(param),
		},
	},
});

const gqlPostCommentSchema: GraphQLSchema = new GraphQLSchema({
	query,
});

export default gqlPostCommentSchema;
