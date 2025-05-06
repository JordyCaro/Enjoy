import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Therapist } from './entities/therapist.entity';

@Injectable()
export class TherapistsService {
  constructor(
    @InjectRepository(Therapist)
    private therapistRepository: Repository<Therapist>,
  ) {}

  async findAll(): Promise<Therapist[]> {
    return this.therapistRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: string): Promise<Therapist> {
    const therapist = await this.therapistRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!therapist) {
      throw new NotFoundException(`Terapeuta con ID ${id} no encontrado`);
    }

    return therapist;
  }

  async findByUserId(userId: string): Promise<Therapist> {
    const therapist = await this.therapistRepository.findOne({
      where: { userId },
      relations: ['user'],
    });

    if (!therapist) {
      throw new NotFoundException(`Terapeuta con UserId ${userId} no encontrado`);
    }

    return therapist;
  }

  async create(createTherapistDto: Partial<Therapist>): Promise<Therapist> {
    const newTherapist = this.therapistRepository.create(createTherapistDto);
    return this.therapistRepository.save(newTherapist);
  }

  async update(id: string, updateTherapistDto: Partial<Therapist>): Promise<Therapist> {
    const therapist = await this.findOne(id);
    const updated = Object.assign(therapist, updateTherapistDto);
    return this.therapistRepository.save(updated);
  }

  async remove(id: string): Promise<Therapist> {
    const therapist = await this.findOne(id);
    await this.therapistRepository.delete(id);
    return therapist;
  }
} 