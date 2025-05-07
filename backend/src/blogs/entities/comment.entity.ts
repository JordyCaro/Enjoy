import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { BlogArticle } from './article.entity';
import { User } from '../../users/user.entity';

@Entity('blog_comments')
export class BlogComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => BlogArticle, article => article.comments, { onDelete: 'CASCADE' })
  article: BlogArticle;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'text', nullable: false })
  content: string;

  @CreateDateColumn()
  createdAt: Date;
} 