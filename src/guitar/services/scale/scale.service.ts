import { Injectable } from '@angular/core';

import { Note } from '../../models/note.model';
import { Scale } from '../../models/scale.model';
import { ScaleConfig } from '../../models/scale-config.model';
import { Pitch } from '../../models/pitch.enum';
import { Interval } from '../../models/interval.enum';

const chromaticScale: Scale = {
  [Pitch.C]: {
    pitch: Pitch.C,
    name: 'C'
  },
  [Pitch.C_SHARP]: {
    pitch: Pitch.C_SHARP,
    name: 'C♯/D♭'
  },
  [Pitch.D]: {
    pitch: Pitch.D,
    name: 'D'
  },
  [Pitch.D_SHARP]: {
    pitch: Pitch.D_SHARP,
    name: 'D♯/E♭'
  },
  [Pitch.E]: {
    pitch: Pitch.E,
    name: 'E'
  },
  [Pitch.F]: {
    pitch: Pitch.F,
    name: 'F'
  },
  [Pitch.F_SHARP]: {
    pitch: Pitch.F_SHARP,
    name: 'F♯/G♭'
  },
  [Pitch.G]: {
    pitch: Pitch.G,
    name: 'G'
  },
  [Pitch.G_SHARP]: {
    pitch: Pitch.G_SHARP,
    name: 'G♯/A♭'
  },
  [Pitch.A]: {
    pitch: Pitch.A,
    name: 'A'
  },
  [Pitch.A_SHARP]: {
    pitch: Pitch.A_SHARP,
    name: 'A♯/B♭'
  },
  [Pitch.B]: {
    pitch: Pitch.B,
    name: 'B'
  }
};

const scales: { [type: string]: Interval[] } = {
  major: [
    Interval.PERFECT_UNISON,
    Interval.MAJOR_SECOND,
    Interval.MAJOR_THIRD,
    Interval.PERFECT_FORTH,
    Interval.PERFECT_FIFTH,
    Interval.MAJOR_SIXTH,
    Interval.MAJOR_SEVENTH
  ],
  minor: [
    Interval.PERFECT_UNISON,
    Interval.MAJOR_SECOND,
    Interval.MINOR_THIRD,
    Interval.PERFECT_FORTH,
    Interval.PERFECT_FIFTH,
    Interval.MINOR_SIXTH,
    Interval.MINOR_SEVENTH
  ]
};

@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  getNote(pitch: Pitch, interval: Interval = Interval.PERFECT_UNISON): Note {
    return chromaticScale[(pitch + interval) % 12];
  }

  getNotes(pitch: Pitch, length: number): Note[] {
    const notes = [];
    let note = this.getNote(pitch);
    while (notes.length < length) {
      notes.push(note);
      note = this.getNote(note.pitch, Interval.SEMITONE);
    }
    return notes;
  }

  getTypes(): string[] {
    return Object.keys(scales);
  }

  getScale(config: ScaleConfig) {
    const scale: Scale = {};
    const intervals = scales[config.type];
    const pitch = +config.pitch;
    intervals.forEach((interval, index) => {
      const note = this.getNote(pitch, interval);
      note.function = index + 1;
      scale[note.pitch] = note;
    });
    return scale;
  }
}
