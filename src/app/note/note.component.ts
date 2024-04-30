import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {
  newNote: Note = {id: 0, title: '', content: ''};
  notes: Note[] = [];
  selectedNote: Note | null = null;

  constructor(private noteService: NoteService) { }

  addNote(){
    this.newNote.id = this.notes.length + 1;
    this.notes.push({ ... this.newNote });
    this.newNote = {id: 0, title: '', content: ''};
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  validateForm(): boolean {
    return this.newNote.title.trim().length >= 5 && this.newNote.content.trim().length >= 7;
  }
  
  onSelect(note: Note) {
    this.selectedNote = note;
  }

  editNote(){
    if (this.selectedNote) {
      this.noteService.editNote(this.selectedNote);
      this.selectedNote = null;
    }
  }

  deleteNote() {
    if (this.selectedNote) {
      this.noteService.deleteNote(this.selectedNote.id);
      this.selectedNote = null;
    }
  }
}
