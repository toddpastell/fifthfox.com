import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Message } from '../../models/message.model';

@Component({
  selector: 'ff-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatInputComponent {
  @Input() loading: boolean;
  @Output() send = new EventEmitter<Message>();

  respond(text: string) {
    this.send.emit({text, userId: 1});
  }
}
