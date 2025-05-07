import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Journal } from './entities/journal.entity';
import { JournalsService } from './journals.service';
import { JournalsController } from './journals.controller';
import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Journal, User]), UsersModule],
  providers: [JournalsService],
  controllers: [JournalsController],
  exports: [JournalsService],
})
export class JournalsModule {} 