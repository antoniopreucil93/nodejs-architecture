import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { PostComment } from './posts-comments.entity';

@Entity({
	name: 'posts',
})
export class Post {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'varchar',
		name: 'title',
	})
	title: string;

	@Column({
		type: 'varchar',
		name: 'text',
	})
	text: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: string;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: string;

	@OneToMany(
		() => PostComment,
		(postComment: PostComment) => postComment.post
	)
	postComments: PostComment[];
}
