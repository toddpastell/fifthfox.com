import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ScaleConfig } from '../../models/scale-config.model';
import { Note } from '../../models/note.model';

@Component({
  selector: 'ff-scale-input',
  templateUrl: './scale-input.component.html',
  styleUrls: ['./scale-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScaleInputComponent implements OnInit {
  @Input() availableTypes: string[];
  @Input() availableNotes: Note[];
  @Output() configScale = new EventEmitter<ScaleConfig>();

  form = this.fb.group({
    type: ['major'],
    pitch: ['0']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.configScale.emit(this.form.value);
    this.form.valueChanges.subscribe(value => {
      this.configScale.emit(value);
    });
  }
}
