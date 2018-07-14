import { Intelligence } from '../intelligence.model';

export class ReverseIntelligence implements Intelligence {
  respond(input: string): string {
    return input.split('').reverse().join('');
  }
}
