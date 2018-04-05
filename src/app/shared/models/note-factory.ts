import { Note } from './note';

export class NoteFactory {
  private range: Note[];

  constructor(private head: Note, private tail: Note) {
    this.range = new Array<Note>();
  }

  public getNotesInRange(): Note[] {
    if (this.head.isGreaterThan(this.tail) || this.head === null || this.tail === null) {
      return new Array<Note>();
    }

    this.range.push(this.head);
    const temp = new Note(this.head.noteName, this.head.octaveNumber);

    while (!temp.equals(this.tail)) {
      temp.incrementNote();
      this.range.push(new Note(temp.noteName, temp.octaveNumber));
    }

    return this.range;
  }
}
