import { Note } from './note.model';

export interface Scale {
  [pitch: number]: Note;
}
