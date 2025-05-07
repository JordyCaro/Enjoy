import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ForumsService } from './forums.service';
import { Forum } from './entities/forum.entity';
import { ForumPost } from './entities/post.entity';
import { ForumComment } from './entities/comment.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Foros')
@Controller('forums')
@UseGuards(AuthGuard('jwt'))
export class ForumsController {
  constructor(private readonly forumsService: ForumsService) {}

  // Foros
  @Get()
  findAllForums(): Promise<Forum[]> {
    return this.forumsService.findAllForums();
  }
  @Get(':id')
  findForum(@Param('id') id: string): Promise<Forum> {
    return this.forumsService.findForum(id);
  }
  @Post()
  createForum(@Body() data: Partial<Forum>): Promise<Forum> {
    return this.forumsService.createForum(data);
  }
  @Put(':id')
  updateForum(@Param('id') id: string, @Body() data: Partial<Forum>): Promise<Forum> {
    return this.forumsService.updateForum(id, data);
  }
  @Delete(':id')
  removeForum(@Param('id') id: string): Promise<Forum> {
    return this.forumsService.removeForum(id);
  }

  // Posts
  @Get('posts/all')
  findAllPosts(): Promise<ForumPost[]> {
    return this.forumsService.findAllPosts();
  }
  @Get('posts/:id')
  findPost(@Param('id') id: string): Promise<ForumPost> {
    return this.forumsService.findPost(id);
  }
  @Post('posts')
  createPost(@Body() data: Partial<ForumPost>, @Request() req): Promise<ForumPost> {
    return this.forumsService.createPost({ ...data, user: req.user.userId });
  }
  @Put('posts/:id')
  updatePost(@Param('id') id: string, @Body() data: Partial<ForumPost>): Promise<ForumPost> {
    return this.forumsService.updatePost(id, data);
  }
  @Delete('posts/:id')
  removePost(@Param('id') id: string): Promise<ForumPost> {
    return this.forumsService.removePost(id);
  }

  // Comentarios
  @Get('comments/all')
  findAllComments(): Promise<ForumComment[]> {
    return this.forumsService.findAllComments();
  }
  @Get('comments/:id')
  findComment(@Param('id') id: string): Promise<ForumComment> {
    return this.forumsService.findComment(id);
  }
  @Post('comments')
  createComment(@Body() data: Partial<ForumComment>, @Request() req): Promise<ForumComment> {
    return this.forumsService.createComment({ ...data, user: req.user.userId });
  }
  @Put('comments/:id')
  updateComment(@Param('id') id: string, @Body() data: Partial<ForumComment>): Promise<ForumComment> {
    return this.forumsService.updateComment(id, data);
  }
  @Delete('comments/:id')
  removeComment(@Param('id') id: string): Promise<ForumComment> {
    return this.forumsService.removeComment(id);
  }
} 