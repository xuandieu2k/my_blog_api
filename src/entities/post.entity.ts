import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { ContentPost } from './content-post.entity';
import { Category } from './category.entity';
import { PostLike } from './post-like.entity';
import { PostHistory } from './post-history.entity';
import { Tag } from './tag.entity';
import { Comment } from './comment.entity';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    title: string;

    @Column({ nullable: true })
    poster?: string;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @Column({ default: 0 })
    view_count: number;

    @Column({ type: 'enum', enum: ['draft', 'published', 'archived'], default: 'draft' })
    status: 'draft' | 'published' | 'archived';

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @OneToMany(() => ContentPost, contentPost => contentPost.post)
    contentPosts: ContentPost[];

    @ManyToMany(() => Category, category => category.posts)
    @JoinTable()
    categories: Category[];

    @OneToMany(() => PostLike, postLike => postLike.post)
    postLikes: PostLike[];

    @OneToMany(() => PostHistory, postHistory => postHistory.post)
    postHistories: PostHistory[];

    @ManyToMany(() => Tag, tag => tag.posts)
    @JoinTable()
    tags: Tag[];

    @OneToMany(() => Comment, comment => comment)
    comments: Comment[];
}