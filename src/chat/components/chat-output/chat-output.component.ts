import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ff-chat-output',
  templateUrl: './chat-output.component.html',
  styleUrls: ['./chat-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatOutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
