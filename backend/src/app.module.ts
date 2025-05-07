import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { TherapistsModule } from './therapists/therapists.module';
import { GroupsModule } from './groups/groups.module';
import { SessionsModule } from './sessions/sessions.module';
import { StreaksModule } from './streaks/streaks.module';
import { JournalsModule } from './journals/journals.module';
import { ForumsModule } from './forums/forums.module';
import { BlogsModule } from './blogs/blogs.module';
import { ProfileModule } from './users/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'enjoy-app',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    UsersModule,
    AuthModule,
    ChatModule,
    TherapistsModule,
    GroupsModule,
    SessionsModule,
    StreaksModule,
    JournalsModule,
    ForumsModule,
    BlogsModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
