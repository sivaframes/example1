import { Component, OnInit } from '@angular/core';
import {StudentmarksService} from "../services/studentmarks.service"
@Component({
  selector: 'app-studentmarks',
  templateUrl: './studentmarks.component.html',
  styleUrls: ['./studentmarks.component.css']
})
export class StudentmarksComponent implements OnInit {
submarks:any
  constructor(private marks:StudentmarksService) { }

  ngOnInit() {
   /*  this.displaymarks(); */
    this.displayop();
  }
displaymarks(){
let op = this.marks.displaysubjectmarks();
op.subscribe(data=>{
  this.submarks = data;
})
}
displayop(){
  let operators = this.marks.display()
  operators.subscribe(data=>{
    console.log(data)
  })
}
}
