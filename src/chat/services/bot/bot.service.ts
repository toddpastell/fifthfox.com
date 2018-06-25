import { Injectable } from '@angular/core';

import { filter, delay, tap } from 'rxjs/operators';

import { ChatService } from '../chat/chat.service';

import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private chat: ChatService) { }

  activate() {
    this.chat.latest$
      .pipe(
        filter(messages => messages[0].userId === 1),
        delay(0),
        tap(() => this.chat.prepare()),
        delay(1000)
      )
      .subscribe(messages => {
        this.chat.addMessage(this.getResponse(messages));
      });
  }

  private getResponse(messages: Message[]): Message {
    const text = 'Sorry... I didn\'t quite understand that.';
    return { text, userId: 2 };
  }
}
