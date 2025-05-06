import { IsNotEmpty, IsString, IsUUID, IsBoolean, IsOptional } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsUUID()
  @IsNotEmpty()
  senderId: string;

  @IsUUID()
  @IsOptional()
  receiverId?: string;

  @IsBoolean()
  @IsOptional()
  isAIMessage?: boolean;

  @IsString()
  @IsOptional()
  roomId?: string;
} 