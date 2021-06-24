import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Post } from './posts.entity';

@Entity({
	name: 'post_comments',
})
export class PostComment {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'int',
		name: 'post_id',
	})
	postId: number;

	@Column({
		type: 'varchar',
		name: 'comment',
	})
	comment: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: string;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: string;

	@JoinColumn({ name: 'post_id' })
	@ManyToOne(() => Post, (post: Post) => post.postComments)
	post: Post;
}
