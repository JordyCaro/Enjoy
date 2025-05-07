import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProfile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private profileRepository: Repository<UserProfile>,
  ) {}

  async findByUserId(userId: string): Promise<UserProfile> {
    const profile = await this.profileRepository.findOne({ where: { user: { id: userId } }, relations: ['user'] });
    if (!profile) throw new NotFoundException('Perfil no encontrado');
    return profile;
  }

  async createOrUpdate(userId: string, data: Partial<UserProfile>): Promise<UserProfile> {
    let profile = await this.profileRepository.findOne({ where: { user: { id: userId } } });
    if (profile) {
      Object.assign(profile, data);
    } else {
      profile = this.profileRepository.create({ ...data, user: { id: userId } });
    }
    return this.profileRepository.save(profile);
  }
} 