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
  formNote: Note = {id: 0, title: '', content: ''};
  selectedNoteId: number = 0;
  notes: Note[] = [];

  isFormSubmitted = false;

  constructor(private noteService: NoteService) {
    this.notes = this.noteService.getNotes();
  }

  saveNote(){
    if (this.formNote.id <= 0) {
      this.formNote.id = this.notes.length + 1;
      this.noteService.addNotes({... this.formNote});
    } else {
      this.noteService.editNote({... this.formNote});
      this.selectedNoteId = -1;
    }
    this.formNote = {id: 0, title: '', content: ''};
    this.isFormSubmitted = true;
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }
  
  onSelect(note: Note) {
    this.selectedNoteId = note.id;
  }

  onEditClicked(note: Note) {
    this.formNote = {
      id: note.id,
      title: note.title,
      content: note.content
    };
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note.id);
  }
}
