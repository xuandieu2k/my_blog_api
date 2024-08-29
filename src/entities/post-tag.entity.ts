import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PostTag {
    @PrimaryColumn()
    post_id: number;

    @PrimaryColumn()
    tag_id: number;
}
