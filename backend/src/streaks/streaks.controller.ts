import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StreaksService } from './streaks.service';
import { Streak } from './entities/streak.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rachas')
@Controller('streaks')
@UseGuards(AuthGuard('jwt'))
export class StreaksController {
  constructor(private readonly streaksService: StreaksService) {}

  @Get()
  findAll(): Promise<Streak[]> {
    return this.streaksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Streak> {
    return this.streaksService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Streak>): Promise<Streak> {
    return this.streaksService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Streak>): Promise<Streak> {
    return this.streaksService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Streak> {
    return this.streaksService.remove(id);
  }
} 