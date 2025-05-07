import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Forum } from './entities/forum.entity';
import { ForumPost } from './entities/post.entity';
import { ForumComment } from './entities/comment.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ForumsService {
  constructor(
    @InjectRepository(Forum)
    private forumRepository: Repository<Forum>,
    @InjectRepository(ForumPost)
    private postRepository: Repository<ForumPost>,
    @InjectRepository(ForumComment)
    private commentRepository: Repository<ForumComment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Foros
  async findAllForums(): Promise<Forum[]> {
    return this.forumRepository.find({ relations: ['posts'] });
  }
  async findForum(id: string): Promise<Forum> {
    const forum = await this.forumRepository.findOne({ where: { id }, relations: ['posts'] });
    if (!forum) throw new NotFoundException('Foro no encontrado');
    return forum;
  }
  async createForum(data: Partial<Forum>): Promise<Forum> {
    const forum = this.forumRepository.create(data);
    return this.forumRepository.save(forum);
  }
  async updateForum(id: string, data: Partial<Forum>): Promise<Forum> {
    await this.forumRepository.update(id, data);
    return this.findForum(id);
  }
  async removeForum(id: string): Promise<Forum> {
    const forum = await this.findForum(id);
    await this.forumRepository.delete(id);
    return forum;
  }

  // Posts
  async findAllPosts(): Promise<ForumPost[]> {
    return this.postRepository.find({ relations: ['forum', 'user', 'comments'] });
  }
  async findPost(id: string): Promise<ForumPost> {
    const post = await this.postRepository.findOne({ where: { id }, relations: ['forum', 'user', 'comments'] });
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }
  async createPost(data: Partial<ForumPost> & { user: string }): Promise<ForumPost> {
    const user = await this.userRepository.findOne({ where: { id: data.user } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const post = this.postRepository.create({ ...data, user });
    return this.postRepository.save(post);
  }
  async updatePost(id: string, data: Partial<ForumPost>): Promise<ForumPost> {
    await this.postRepository.update(id, data);
    return this.findPost(id);
  }
  async removePost(id: string): Promise<ForumPost> {
    const post = await this.findPost(id);
    await this.postRepository.delete(id);
    return post;
  }

  // Comentarios
  async findAllComments(): Promise<ForumComment[]> {
    return this.commentRepository.find({ relations: ['post', 'user'] });
  }
  async findComment(id: string): Promise<ForumComment> {
    const comment = await this.commentRepository.findOne({ where: { id }, relations: ['post', 'user'] });
    if (!comment) throw new NotFoundException('Comentario no encontrado');
    return comment;
  }
  async createComment(data: Partial<ForumComment> & { user: string }): Promise<ForumComment> {
    const user = await this.userRepository.findOne({ where: { id: data.user } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const comment = this.commentRepository.create({ ...data, user });
    return this.commentRepository.save(comment);
  }
  async updateComment(id: string, data: Partial<ForumComment>): Promise<ForumComment> {
    await this.commentRepository.update(id, data);
    return this.findComment(id);
  }
  async removeComment(id: string): Promise<ForumComment> {
    const comment = await this.findComment(id);
    await this.commentRepository.delete(id);
    return comment;
  }
} 