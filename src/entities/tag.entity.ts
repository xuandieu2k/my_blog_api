import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, unique: true })
    name: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @ManyToMany(() => Post, post => post.tags)
    posts: Post[];
}
