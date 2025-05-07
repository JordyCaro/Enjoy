import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Journal } from './entities/journal.entity';
import { User } from '../users/user.entity';

@Injectable()
export class JournalsService {
  constructor(
    @InjectRepository(Journal)
    private journalRepository: Repository<Journal>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Journal[]> {
    return this.journalRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<Journal> {
    const journal = await this.journalRepository.findOne({ where: { id }, relations: ['user'] });
    if (!journal) throw new NotFoundException('Diario no encontrado');
    return journal;
  }

  async create(data: Partial<Journal> & { user: string }): Promise<Journal> {
    const user = await this.userRepository.findOne({ where: { id: data.user } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const journal = this.journalRepository.create({ ...data, user });
    return this.journalRepository.save(journal);
  }

  async update(id: string, data: Partial<Journal>): Promise<Journal> {
    await this.journalRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Journal> {
    const journal = await this.findOne(id);
    await this.journalRepository.delete(id);
    return journal;
  }
} 