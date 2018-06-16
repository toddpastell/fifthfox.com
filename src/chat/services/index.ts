import { ChatService } from './chat/chat.service';
import { BotService } from './bot/bot.service';

export const services: any[] = [
  ChatService,
  BotService
];

export * from './chat/chat.service';
export * from './bot/bot.service';
