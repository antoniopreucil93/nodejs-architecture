import { getCustomRepository } from 'typeorm';
import { PostComment } from '../database/entities/posts-comments.entity';
import { PostCommentRepository } from '../database/repositories/post-comments.repository';

export class PostCommentService {
	public async getPostComments(postId: number): Promise<PostComment[]> {
		return getCustomRepository(PostCommentRepository).getPostComments(
			postId
		);
	}
}
