import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Message } from '../../models/message.model';

@Component({
  selector: 'ff-chat-output',
  templateUrl: './chat-output.component.html',
  styleUrls: ['./chat-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('appear', [
      state('any', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class ChatOutputComponent {
  @Input() messages: Message[];
}
