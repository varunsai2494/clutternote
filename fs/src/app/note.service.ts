import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { analyzeAndValidateNgModules, analyzeNgModules } from '@angular/compiler';

// import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  getNotes(){
    
    
    console.log('get all notes')
    try{
    return this.http.get('http://localhost:3000/note')
    }
    catch(error){
      console.log(error)
    }
  }

  createNote(text:String,titletext:String){
    
    console.log('created new note')
    return this.http.post("http://localhost:3000/note",
{
"name":  titletext,
"text":  text
})
.subscribe(
data  => {
  
console.log("POST Request is successful ", data);
},
error  => {

console.log("Error", error);

}

);
  }



}
