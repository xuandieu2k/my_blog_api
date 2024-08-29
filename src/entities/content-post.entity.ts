import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class ContentPost {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, post => post.contentPosts)
    post: Post;

    @Column('text')
    content: string;

    @Column()
    type: number;

    @Column({ nullable: true })
    url?: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
