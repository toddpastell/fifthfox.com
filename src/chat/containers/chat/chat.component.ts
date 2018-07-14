import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { ChatService, BotService } from '../../services';

import { Message } from '../../models/message.model';
import { ReverseIntelligence } from '../../models/intelligences/reverse-intelligence.model';

@Component({
  selector: 'ff-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {
  messages$: Observable<Message[]>;
  loading$: Observable<boolean>;

  constructor(private chat: ChatService, private bot: BotService) { }

  ngOnInit() {
    this.bot.intelligence = new ReverseIntelligence();
    this.bot.activate();
    this.messages$ = this.chat.messages$;
    this.loading$ = this.chat.loading$;

    this.chat.latest$.subscribe((() => {
      setTimeout(() => {
        window.scroll(0, 2147483647)
      });
    }));
  }

  onSend(event: Message) {
    this.chat.addMessage(event);
  }
}
