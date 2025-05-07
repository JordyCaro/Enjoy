import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { BlogArticle } from './entities/article.entity';
import { BlogComment } from './entities/comment.entity';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Blog, BlogArticle, BlogComment, User]), UsersModule],
  providers: [BlogsService],
  controllers: [BlogsController],
  exports: [BlogsService],
})
export class BlogsModule {} 