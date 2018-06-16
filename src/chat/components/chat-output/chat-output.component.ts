import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Message } from '../../models/message.model';

@Component({
  selector: 'ff-chat-output',
  templateUrl: './chat-output.component.html',
  styleUrls: ['./chat-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatOutputComponent {
  @Input() messages: Message[];
}
