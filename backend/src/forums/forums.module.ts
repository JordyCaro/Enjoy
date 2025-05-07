import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forum } from './entities/forum.entity';
import { ForumPost } from './entities/post.entity';
import { ForumComment } from './entities/comment.entity';
import { ForumsService } from './forums.service';
import { ForumsController } from './forums.controller';
import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Forum, ForumPost, ForumComment, User]), UsersModule],
  providers: [ForumsService],
  controllers: [ForumsController],
  exports: [ForumsService],
})
export class ForumsModule {} 