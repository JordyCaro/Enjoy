import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ForumPost } from './post.entity';
import { User } from '../../users/user.entity';

@Entity('forum_comments')
export class ForumComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ForumPost, post => post.comments, { onDelete: 'CASCADE' })
  post: ForumPost;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'text', nullable: false })
  content: string;

  @CreateDateColumn()
  createdAt: Date;
} 