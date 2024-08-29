import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';

@Entity()
export class PostLike {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, post => post.postLikes)
    post: Post;

    @ManyToOne(() => User, user => user.postLikes)
    user: User;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
