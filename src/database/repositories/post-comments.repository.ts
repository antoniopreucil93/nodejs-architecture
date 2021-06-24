import { EntityRepository, Repository } from 'typeorm';
import { PostComment } from '../entities/posts-comments.entity';

@EntityRepository(PostComment)
export class PostCommentRepository extends Repository<PostComment> {
	public getPostComments(postId: number): Promise<PostComment[]> {
		return this.createQueryBuilder('postComments')
			.where('postId=:postId', { postId })
			.getMany();
	}
}
