import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Streak } from './entities/streak.entity';

@Injectable()
export class StreaksService {
  constructor(
    @InjectRepository(Streak)
    private streakRepository: Repository<Streak>,
  ) {}

  async findAll(): Promise<Streak[]> {
    return this.streakRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<Streak> {
    const streak = await this.streakRepository.findOne({ where: { id }, relations: ['user'] });
    if (!streak) throw new NotFoundException('Racha no encontrada');
    return streak;
  }

  async create(data: Partial<Streak>): Promise<Streak> {
    const streak = this.streakRepository.create(data);
    return this.streakRepository.save(streak);
  }

  async update(id: string, data: Partial<Streak>): Promise<Streak> {
    await this.streakRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Streak> {
    const streak = await this.findOne(id);
    await this.streakRepository.delete(id);
    return streak;
  }
} 