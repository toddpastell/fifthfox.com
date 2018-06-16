import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ChatService, BotService } from '../../services';

import { Observable } from 'rxjs';
import { Message } from '../../models/message.model';

@Component({
  selector: 'ff-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private chat: ChatService, private bot: BotService) { }

  ngOnInit() {
    this.bot.activate();
    this.messages$ = this.chat.messages$;
  }

  onSend(event: Message) {
    this.chat.addMessage(event);
  }
}
