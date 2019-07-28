import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  notesList:Object;
  constructor(private note:NoteService) { }

  ngOnInit() {
    this.note.getNotes().subscribe(note=>{
      this.notesList=note
      console.log(this.notesList)
    // this.note.getNotes()
    })
  }
  

  createNote(usertext:String,titletext:String){
    var abc:any=console.log(this.note.createNote(usertext,titletext))
    console.log(abc.name)
    
  }

}
