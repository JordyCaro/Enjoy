import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TherapistsService } from './therapists.service';
import { Therapist } from './entities/therapist.entity';

@Controller('therapists')
export class TherapistsController {
  constructor(private readonly therapistsService: TherapistsService) {}

  @Get()
  findAll(): Promise<Therapist[]> {
    return this.therapistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Therapist> {
    return this.therapistsService.findOne(id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string): Promise<Therapist> {
    return this.therapistsService.findByUserId(userId);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTherapistDto: Partial<Therapist>, @Request() req): Promise<Therapist> {
    // Asegurar que el userId corresponde al usuario autenticado
    if (!createTherapistDto.userId) {
      createTherapistDto.userId = req.user.userId;
    }
    return this.therapistsService.create(createTherapistDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string, 
    @Body() updateTherapistDto: Partial<Therapist>,
    @Request() req
  ): Promise<Therapist> {
    // Aquí podrías agregar verificación de permisos
    return this.therapistsService.update(id, updateTherapistDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Request() req): Promise<Therapist> {
    // Aquí podrías agregar verificación de permisos
    return this.therapistsService.remove(id);
  }
} 