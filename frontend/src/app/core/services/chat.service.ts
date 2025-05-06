import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface ChatMessage {
  id: string;
  content: string;
  senderId: string;
  receiverId?: string;
  isAIMessage: boolean;
  roomId?: string;
  createdAt: Date;
  // Relaciones populdas que puede devolver el backend
  sender?: any;
  receiver?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private apiService: ApiService) {}

  getMessagesFromUser(userId: string): Observable<ChatMessage[]> {
    return this.apiService.get<ChatMessage[]>(`chat/users/${userId}`);
  }

  getMessagesFromRoom(roomId: string): Observable<ChatMessage[]> {
    return this.apiService.get<ChatMessage[]>(`chat/room/${roomId}`);
  }

  sendMessage(message: {
    content: string;
    receiverId?: string;
    roomId?: string;
    isAIMessage?: boolean;
  }): Observable<ChatMessage> {
    return this.apiService.post<ChatMessage>('chat/messages', message);
  }

  deleteMessage(messageId: string): Observable<void> {
    return this.apiService.delete<void>(`chat/messages/${messageId}`);
  }
} 