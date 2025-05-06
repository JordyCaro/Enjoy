import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChatService } from './chat.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ChatMessage } from './entities/chat-message.entity';

@Controller('chat')
@UseGuards(AuthGuard('jwt'))
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('messages')
  async createMessage(
    @Body() createMessageDto: CreateMessageDto,
    @Request() req,
  ): Promise<ChatMessage> {
    // Asegurar que el remitente sea el usuario autenticado
    if (req.user.userId !== createMessageDto.senderId) {
      createMessageDto.senderId = req.user.userId;
    }
    
    return this.chatService.createMessage(createMessageDto);
  }

  @Get('room/:roomId')
  async getMessagesByRoom(
    @Param('roomId') roomId: string,
  ): Promise<ChatMessage[]> {
    return this.chatService.getMessagesByRoomId(roomId);
  }

  @Get('users/:userId')
  async getMessagesBetweenUsers(
    @Param('userId') userId: string,
    @Request() req,
  ): Promise<ChatMessage[]> {
    return this.chatService.getMessagesBetweenUsers(req.user.userId, userId);
  }

  @Delete('messages/:id')
  async deleteMessage(@Param('id') id: string): Promise<void> {
    return this.chatService.deleteMessage(id);
  }
} 