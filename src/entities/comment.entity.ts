import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, ManyToOne as ManyToOneAlt, OneToMany } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';
import { CommentLike } from './comment-like.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;

    @ManyToOne(() => User, user => user.comments)
    user: User;

    @Column('text')
    content: string;

    @ManyToOneAlt(() => Comment, { nullable: true })
    parent: Comment;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @OneToMany(() => CommentLike, commentLike => commentLike.user)
    commentLikes: CommentLike[];
    
}
