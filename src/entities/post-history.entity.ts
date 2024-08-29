import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';

@Entity()
export class PostHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, post => post.postHistories)
    post: Post;

    @ManyToOne(() => User, user => user.postHistories)
    user: User;

    @Column({ length: 255 })
    title: string;

    @Column('text')
    content: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    edited_at: Date;
}