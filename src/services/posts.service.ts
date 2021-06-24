import { getConnection, getCustomRepository } from 'typeorm';
import { PostRepository } from '../database/repositories/posts.repository';

export class PostService {
	constructor() {}

	public async getAll() {
		return getCustomRepository(PostRepository).getAll();
	}

	public async store(postPayload: any) {
		getCustomRepository(PostRepository).store(postPayload);
	}
}
