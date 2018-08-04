import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ScaleService } from '../../services';
import { Note } from '../../models/note.model';
import { Scale } from '../../models/scale.model';
import { ScaleConfig } from '../../models/scale-config.model';
import { Pitch } from '../../models/pitch.enum';

@Component({
  selector: 'ff-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuitarComponent implements OnInit {
  length = 13;
  strings: Note[][];
  frets: number[];
  scale: Scale;
  availableNotes: Note[];
  availableTypes: string[];

  constructor(private scaleService: ScaleService) {}

  ngOnInit() {
    this.strings = [
      this.scaleService.getNotes(Pitch.E, this.length),
      this.scaleService.getNotes(Pitch.B, this.length),
      this.scaleService.getNotes(Pitch.G, this.length),
      this.scaleService.getNotes(Pitch.D, this.length),
      this.scaleService.getNotes(Pitch.A, this.length),
      this.scaleService.getNotes(Pitch.E, this.length)
    ];
    this.frets = [];
    for (let i = 0; i < this.length; i++) {
      this.frets.push(i);
    }

    this.availableNotes = this.scaleService.getNotes(Pitch.C, 12);
    this.availableTypes = this.scaleService.getTypes();
  }

  onConfigScale(event: ScaleConfig) {
    this.scale = this.scaleService.getScale(event);
  }
}
