import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { BlogArticle } from './entities/article.entity';
import { BlogComment } from './entities/comment.entity';
import { User } from '../users/user.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
    @InjectRepository(BlogArticle)
    private articleRepository: Repository<BlogArticle>,
    @InjectRepository(BlogComment)
    private commentRepository: Repository<BlogComment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Blogs
  async findAllBlogs(): Promise<Blog[]> {
    return this.blogRepository.find({ relations: ['articles'] });
  }
  async findBlog(id: string): Promise<Blog> {
    const blog = await this.blogRepository.findOne({ where: { id }, relations: ['articles'] });
    if (!blog) throw new NotFoundException('Blog no encontrado');
    return blog;
  }
  async createBlog(data: Partial<Blog>): Promise<Blog> {
    const blog = this.blogRepository.create(data);
    return this.blogRepository.save(blog);
  }
  async updateBlog(id: string, data: Partial<Blog>): Promise<Blog> {
    await this.blogRepository.update(id, data);
    return this.findBlog(id);
  }
  async removeBlog(id: string): Promise<Blog> {
    const blog = await this.findBlog(id);
    await this.blogRepository.delete(id);
    return blog;
  }

  // Artículos
  async findAllArticles(): Promise<BlogArticle[]> {
    return this.articleRepository.find({ relations: ['blog', 'user', 'comments'] });
  }
  async findArticle(id: string): Promise<BlogArticle> {
    const article = await this.articleRepository.findOne({ where: { id }, relations: ['blog', 'user', 'comments'] });
    if (!article) throw new NotFoundException('Artículo no encontrado');
    return article;
  }
  async createArticle(data: Partial<BlogArticle> & { user: string }): Promise<BlogArticle> {
    const user = await this.userRepository.findOne({ where: { id: data.user } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const article = this.articleRepository.create({ ...data, user });
    return this.articleRepository.save(article);
  }
  async updateArticle(id: string, data: Partial<BlogArticle>): Promise<BlogArticle> {
    await this.articleRepository.update(id, data);
    return this.findArticle(id);
  }
  async removeArticle(id: string): Promise<BlogArticle> {
    const article = await this.findArticle(id);
    await this.articleRepository.delete(id);
    return article;
  }

  // Comentarios
  async findAllComments(): Promise<BlogComment[]> {
    return this.commentRepository.find({ relations: ['article', 'user'] });
  }
  async findComment(id: string): Promise<BlogComment> {
    const comment = await this.commentRepository.findOne({ where: { id }, relations: ['article', 'user'] });
    if (!comment) throw new NotFoundException('Comentario no encontrado');
    return comment;
  }
  async createComment(data: Partial<BlogComment> & { user: string }): Promise<BlogComment> {
    const user = await this.userRepository.findOne({ where: { id: data.user } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const comment = this.commentRepository.create({ ...data, user });
    return this.commentRepository.save(comment);
  }
  async updateComment(id: string, data: Partial<BlogComment>): Promise<BlogComment> {
    await this.commentRepository.update(id, data);
    return this.findComment(id);
  }
  async removeComment(id: string): Promise<BlogComment> {
    const comment = await this.findComment(id);
    await this.commentRepository.delete(id);
    return comment;
  }
} 