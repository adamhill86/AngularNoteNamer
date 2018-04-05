import { NoteName } from './note-name';

export class Note {
  constructor(public noteName: NoteName, public octaveNumber: number) {}

  public intervalBetween(other: Note): number {
    if (this.equals(other)) {
      return 0;
    }

    const temp = new Note(this.noteName, this.octaveNumber);
    let interval = 0;

    while (!temp.equals(other)) {
      if (this.isLessThan(other)) {
        temp.incrementNote();
        interval++;
      } else {
        temp.decrementNote();
        interval--;
      }
    }

    return interval;
  }

  public incrementNote() {
    if (this.noteName === NoteName.B) {
      this.noteName = NoteName.C;
      this.octaveNumber++;
    } else {
      this.noteName++;
    }
  }

  public decrementNote() {
    if (this.noteName === NoteName.C) {
      this.noteName = NoteName.B;
      this.octaveNumber--;
    } else {
      this.noteName--;
    }
  }

  public compareTo(other: Note): number {
    if (this === other || this.equals(other)) {
      return 0;
    }

    if (this.noteName === other.noteName) {
      return this.octaveNumber > other.octaveNumber ? 1 : -1;
    } else if (this.octaveNumber === other.octaveNumber) {
      return this.noteName > other.noteName ? 1 : -1;
    }

    return this.octaveNumber > other.octaveNumber ? 1 : -1;
  }

  public isLessThan(other: Note): boolean {
    return this.compareTo(other) < 0;
  }

  public isGreaterThan(other: Note): boolean {
    return this.compareTo(other) > 0;
  }

  public equals(other: Note): boolean {
    return (
      this === other ||
      (this.noteName === other.noteName && this.octaveNumber === other.octaveNumber)
    );
  }
}
