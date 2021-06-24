import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../entities/posts.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
	public getAll() {
		return this.find();
	}

	public store(postPayload: any) {
		return this.save(postPayload);
	}
}
