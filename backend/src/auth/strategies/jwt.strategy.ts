import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'enjoyapp-secret-key',
    });
  }

  async validate(payload: any) {
    // payload.sub contiene el ID del usuario
    const user = await this.usersService.findById(payload.sub);
    
    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
      user,
    };
  }
} 