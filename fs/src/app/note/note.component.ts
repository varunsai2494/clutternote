import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})


export class NoteComponent implements OnInit {
  note:any
  @Input('name') name:string;
  @Input('text') text:string;
  
  constructor() { 
    

    
    }
  ngOnInit() {

    
    this.note={
      name:this.name,
      text:this.text

    }
    console.log(this.note)
  }

}
