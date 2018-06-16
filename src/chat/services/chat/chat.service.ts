import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  latest$ = new Subject<Message[]>();
  messages$ = this.latest$.pipe(
    scan((acc, curr) => [...curr, ...acc.filter(message => !message.loading)])
  );

  addMessage(message: Message) {
    this.latest$.next([message]);
  }
}
