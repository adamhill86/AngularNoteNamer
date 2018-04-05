import { Component, OnInit } from '@angular/core';
import { NoteFactory } from '../../shared/models/note-factory';
import { NoteName } from '../../shared/models/note-name';
import { Note } from '../../shared/models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  private noteFactory: NoteFactory;

  constructor() {
    this.noteFactory = new NoteFactory(new Note(NoteName.C, 4), new Note(NoteName.C, 5));
  }

  ngOnInit() {
    this.noteFactory.getNotesInRange();
  }
}
