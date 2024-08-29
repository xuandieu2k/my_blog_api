import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Comment } from './comment.entity';
import { User } from './user.entity';

@Entity()
export class CommentLike {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Comment, comment => comment.commentLikes)
    comment: Comment;

    @ManyToOne(() => User, user => user.commentLikes)
    user: User;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
