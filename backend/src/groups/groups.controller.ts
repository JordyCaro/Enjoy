import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GroupsService } from './groups.service';
import { Group } from './entities/group.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Grupos')
@Controller('groups')
@UseGuards(AuthGuard('jwt'))
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  findAll(): Promise<Group[]> {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Group> {
    return this.groupsService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Group>): Promise<Group> {
    return this.groupsService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Group>): Promise<Group> {
    return this.groupsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Group> {
    return this.groupsService.remove(id);
  }
} 