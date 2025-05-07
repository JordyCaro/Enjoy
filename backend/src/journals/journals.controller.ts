import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JournalsService } from './journals.service';
import { Journal } from './entities/journal.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Diarios')
@Controller('journals')
@UseGuards(AuthGuard('jwt'))
export class JournalsController {
  constructor(private readonly journalsService: JournalsService) {}

  @Get()
  findAll(): Promise<Journal[]> {
    return this.journalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Journal> {
    return this.journalsService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Journal>, @Request() req): Promise<Journal> {
    return this.journalsService.create({ ...data, user: req.user.userId });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Journal>): Promise<Journal> {
    return this.journalsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Journal> {
    return this.journalsService.remove(id);
  }
} 