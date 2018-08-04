import { Pitch } from './pitch.enum';

export interface Note {
  pitch: Pitch;
  name: string;
  function?: number;
}
