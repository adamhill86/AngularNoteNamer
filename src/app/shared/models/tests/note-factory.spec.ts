import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Note } from '../note';
import { NoteName } from '../note-name';
import { NoteFactory } from '../note-factory';

{
  describe('NoteFactory', () => {
    let noteFactory: NoteFactory;
    let head: Note;
    let tail: Note;

    beforeEach(() => {
      head = new Note(NoteName.C, 4);
      tail = new Note(NoteName.C, 5);
      noteFactory = new NoteFactory(head, tail);
    });

    it('should generate an array of notes in the range [head, tail] inclusive', () => {
      let notes: Note[] = noteFactory.getNotesInRange();
      expect(notes.length).toBe(8);
      expect(notes[0].equals(new Note(NoteName.C, 4)));
      expect(notes[1].equals(new Note(NoteName.D, 4)));
      expect(notes[2].equals(new Note(NoteName.E, 4)));
      expect(notes[3].equals(new Note(NoteName.F, 4)));
      expect(notes[4].equals(new Note(NoteName.G, 4)));
      expect(notes[5].equals(new Note(NoteName.A, 4)));
      expect(notes[6].equals(new Note(NoteName.B, 4)));
      expect(notes[7].equals(new Note(NoteName.C, 5)));

      let newFactory = new NoteFactory(head, head);
      notes = newFactory.getNotesInRange();
      expect(notes.length).toBe(1);
      expect(notes[0].equals(head));

      newFactory = new NoteFactory(tail, head);
      notes = newFactory.getNotesInRange();
      expect(notes.length).toBe(0);
    });

    it('should generate a random note within the range [head, tail] inclusive()', () => {
      const notes: Note[] = noteFactory.getNotesInRange();

      for (let i = 0; i < 50; i++) {
        const note: Note = noteFactory.getRandomNote();
        expect(notes).toContain(note);
      }
    });
  });
}
