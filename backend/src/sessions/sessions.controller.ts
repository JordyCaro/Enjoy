import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SessionsService } from './sessions.service';
import { Session } from './entities/session.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sesiones')
@Controller('sessions')
@UseGuards(AuthGuard('jwt'))
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  findAll(): Promise<Session[]> {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Session> {
    return this.sessionsService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Session>): Promise<Session> {
    return this.sessionsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Session>): Promise<Session> {
    return this.sessionsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Session> {
    return this.sessionsService.remove(id);
  }
} 