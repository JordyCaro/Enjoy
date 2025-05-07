import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async findAll(): Promise<Group[]> {
    return this.groupRepository.find({ relations: ['members'] });
  }

  async findOne(id: string): Promise<Group> {
    const group = await this.groupRepository.findOne({ where: { id }, relations: ['members'] });
    if (!group) throw new NotFoundException('Grupo no encontrado');
    return group;
  }

  async create(data: Partial<Group>): Promise<Group> {
    const group = this.groupRepository.create(data);
    return this.groupRepository.save(group);
  }

  async update(id: string, data: Partial<Group>): Promise<Group> {
    await this.groupRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Group> {
    const group = await this.findOne(id);
    await this.groupRepository.delete(id);
    return group;
  }
} 