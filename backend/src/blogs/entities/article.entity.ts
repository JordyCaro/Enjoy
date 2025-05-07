import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Blog } from './blog.entity';
import { User } from '../../users/user.entity';
import { BlogComment } from './comment.entity';

@Entity('blog_articles')
export class BlogArticle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Blog, blog => blog.articles, { onDelete: 'CASCADE' })
  blog: Blog;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  content: string;

  @OneToMany(() => BlogComment, comment => comment.article)
  comments: BlogComment[];

  @CreateDateColumn()
  createdAt: Date;
} 