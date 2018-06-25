import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  loading$ = new Subject<boolean>();
  latest$ = new Subject<Message[]>();
  messages$ = this.latest$.pipe(
    scan((acc, curr) => [...curr, ...acc])
  );

  prepare() {
    this.loading$.next(true);
  }

  addMessage(message: Message) {
    this.latest$.next([message]);
    this.loading$.next(false);
  }
}
