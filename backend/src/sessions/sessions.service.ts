import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  async findAll(): Promise<Session[]> {
    return this.sessionRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<Session> {
    const session = await this.sessionRepository.findOne({ where: { id }, relations: ['user'] });
    if (!session) throw new NotFoundException('Sesión no encontrada');
    return session;
  }

  async create(data: Partial<Session>): Promise<Session> {
    const session = this.sessionRepository.create(data);
    return this.sessionRepository.save(session);
  }

  async update(id: string, data: Partial<Session>): Promise<Session> {
    await this.sessionRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Session> {
    const session = await this.findOne(id);
    await this.sessionRepository.delete(id);
    return session;
  }
} 