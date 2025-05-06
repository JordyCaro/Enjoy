import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatMessage } from './entities/chat-message.entity';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatMessage)
    private chatRepository: Repository<ChatMessage>,
  ) {}

  async createMessage(createMessageDto: CreateMessageDto): Promise<ChatMessage> {
    const newMessage = this.chatRepository.create(createMessageDto);
    return this.chatRepository.save(newMessage);
  }

  async getMessagesByRoomId(roomId: string): Promise<ChatMessage[]> {
    return this.chatRepository.find({
      where: { roomId },
      relations: ['sender', 'receiver'],
      order: { createdAt: 'ASC' },
    });
  }

  async getMessagesBetweenUsers(
    userId1: string,
    userId2: string,
  ): Promise<ChatMessage[]> {
    return this.chatRepository
      .createQueryBuilder('message')
      .where(
        '(message.senderId = :userId1 AND message.receiverId = :userId2) OR ' +
          '(message.senderId = :userId2 AND message.receiverId = :userId1)',
        { userId1, userId2 },
      )
      .orderBy('message.createdAt', 'ASC')
      .getMany();
  }

  async deleteMessage(id: string): Promise<void> {
    await this.chatRepository.delete(id);
  }
} 