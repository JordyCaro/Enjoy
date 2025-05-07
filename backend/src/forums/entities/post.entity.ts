import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Forum } from './forum.entity';
import { User } from '../../users/user.entity';
import { ForumComment } from './comment.entity';

@Entity('forum_posts')
export class ForumPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Forum, forum => forum.posts, { onDelete: 'CASCADE' })
  forum: Forum;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  content: string;

  @OneToMany(() => ForumComment, comment => comment.post)
  comments: ForumComment[];

  @CreateDateColumn()
  createdAt: Date;
} 