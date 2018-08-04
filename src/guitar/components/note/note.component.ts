import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Note } from '../../models/note.model';

@Component({
  selector: 'ff-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent {
  @Input() note: Note;
  @Input() inScale: boolean;
}
