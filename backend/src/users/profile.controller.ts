import { Controller, Get, Put, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';
import { UserProfile } from './entities/profile.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Perfil')
@Controller('profile')
@UseGuards(AuthGuard('jwt'))
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getProfile(@Request() req): Promise<UserProfile> {
    return this.profileService.findByUserId(req.user.userId);
  }

  @Put()
  updateProfile(@Request() req, @Body() data: Partial<UserProfile>): Promise<UserProfile> {
    return this.profileService.createOrUpdate(req.user.userId, data);
  }
} 