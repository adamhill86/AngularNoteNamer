import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Note } from '../note';
import { NoteName } from '../note-name';

{
  describe('NoteComponent', () => {
    let note: Note;

    beforeEach(() => {
      note = new Note(NoteName.C, 4);
    });

    it('should have a note name of C', () => {
      expect(note.noteName).toBe(NoteName.C);
    });

    it('should have an octave number of 4', () => {
      expect(note.octaveNumber).toBe(4);
    });

    it('should increment the note name when incrementNote() is called', () => {
      note.incrementNote();
      expect(note.noteName).toBe(NoteName.D);
      expect(note.octaveNumber).toBe(4);

      note.noteName = NoteName.B;
      note.incrementNote();
      expect(note.noteName).toBe(NoteName.C);
      expect(note.octaveNumber).toBe(5);
    });

    it('should decrement the note name when decrementNote() is called', () => {
      note.decrementNote();
      expect(note.noteName).toBe(NoteName.B);
      expect(note.octaveNumber).toBe(3);

      note.decrementNote();
      expect(note.noteName).toBe(NoteName.A);
      expect(note.octaveNumber).toBe(3);
    });

    it('should return a comparison value of 0 if two notes are equal', () => {
      const newNote = new Note(NoteName.C, 4);
      expect(note.compareTo(newNote)).toBe(0);
      expect(newNote.compareTo(note)).toBe(0);
      expect(note.compareTo(note)).toBe(0);
      expect(newNote.compareTo(newNote)).toBe(0);
    });

    it('should return a comparison value of 1 if this note procedes another note', () => {
      let newNote = new Note(NoteName.B, 3);
      expect(note.compareTo(newNote)).toBe(1);

      newNote = new Note(NoteName.C, 3);
      expect(note.compareTo(newNote)).toBe(1);

      note.noteName = NoteName.B;
      newNote = new Note(NoteName.A, 4);
      expect(note.compareTo(newNote)).toBe(1);
    });

    it('should return a comparison value of -1 if thise note precedes another note', () => {
      let newNote = new Note(NoteName.D, 4);
      expect(note.compareTo(newNote)).toBe(-1);

      newNote = new Note(NoteName.C, 5);
      expect(note.compareTo(newNote)).toBe(-1);

      newNote = new Note(NoteName.E, 8);
      expect(note.compareTo(newNote)).toBe(-1);
    });

    it('should correctly measure the interval between two notes', () => {
      expect(note.intervalBetween(note)).toBe(0);

      let newNote = new Note(NoteName.B, 3);
      expect(note.intervalBetween(newNote)).toBe(-1);
      expect(newNote.intervalBetween(note)).toBe(1);

      newNote = new Note(NoteName.C, 5);
      expect(note.intervalBetween(newNote)).toBe(7);
      expect(newNote.intervalBetween(note)).toBe(-7);
    });
  });
}
