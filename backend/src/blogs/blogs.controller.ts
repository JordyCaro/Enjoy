import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { BlogArticle } from './entities/article.entity';
import { BlogComment } from './entities/comment.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Blogs')
@Controller('blogs')
@UseGuards(AuthGuard('jwt'))
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  // Blogs
  @Get()
  findAllBlogs(): Promise<Blog[]> {
    return this.blogsService.findAllBlogs();
  }
  @Get(':id')
  findBlog(@Param('id') id: string): Promise<Blog> {
    return this.blogsService.findBlog(id);
  }
  @Post()
  createBlog(@Body() data: Partial<Blog>): Promise<Blog> {
    return this.blogsService.createBlog(data);
  }
  @Put(':id')
  updateBlog(@Param('id') id: string, @Body() data: Partial<Blog>): Promise<Blog> {
    return this.blogsService.updateBlog(id, data);
  }
  @Delete(':id')
  removeBlog(@Param('id') id: string): Promise<Blog> {
    return this.blogsService.removeBlog(id);
  }

  // Artículos
  @Get('articles/all')
  findAllArticles(): Promise<BlogArticle[]> {
    return this.blogsService.findAllArticles();
  }
  @Get('articles/:id')
  findArticle(@Param('id') id: string): Promise<BlogArticle> {
    return this.blogsService.findArticle(id);
  }
  @Post('articles')
  createArticle(@Body() data: Partial<BlogArticle>, @Request() req): Promise<BlogArticle> {
    return this.blogsService.createArticle({ ...data, user: req.user.userId });
  }
  @Put('articles/:id')
  updateArticle(@Param('id') id: string, @Body() data: Partial<BlogArticle>): Promise<BlogArticle> {
    return this.blogsService.updateArticle(id, data);
  }
  @Delete('articles/:id')
  removeArticle(@Param('id') id: string): Promise<BlogArticle> {
    return this.blogsService.removeArticle(id);
  }

  // Comentarios
  @Get('comments/all')
  findAllComments(): Promise<BlogComment[]> {
    return this.blogsService.findAllComments();
  }
  @Get('comments/:id')
  findComment(@Param('id') id: string): Promise<BlogComment> {
    return this.blogsService.findComment(id);
  }
  @Post('comments')
  createComment(@Body() data: Partial<BlogComment>, @Request() req): Promise<BlogComment> {
    return this.blogsService.createComment({ ...data, user: req.user.userId });
  }
  @Put('comments/:id')
  updateComment(@Param('id') id: string, @Body() data: Partial<BlogComment>): Promise<BlogComment> {
    return this.blogsService.updateComment(id, data);
  }
  @Delete('comments/:id')
  removeComment(@Param('id') id: string): Promise<BlogComment> {
    return this.blogsService.removeComment(id);
  }
} 