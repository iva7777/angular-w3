import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];

  constructor() { }

  getNotes(): Note[] {
    return this.notes;
  }

  addNotes(note: Note): void {
    this.notes.push(note);
  }

  editNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = {...updatedNote};
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
