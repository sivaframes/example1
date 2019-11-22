import { Component, OnInit } from '@angular/core';
import { Types } from "../types"
import {CollegedataService} from "../services/collegedata.service";
import {ExempleService} from "../services/exemple.service";
import {StudentmarksService} from '../services/studentmarks.service';


@Component({
  selector: 'app-tabler',
  templateUrl: './tabler.component.html',
  styleUrls: ['./tabler.component.css']
})
export class TablerComponent implements OnInit {
  collegelist:any;
  stlist:any;
  uni:any;
  constructor(private collegedata:CollegedataService,private example:ExempleService,private ex2:StudentmarksService) { }

  ngOnInit() {
    this.getcollegeList();
    /* this.getunicast(); */
    this.getsubject()
   this.multicasting();
  
  }
  getcollegeList (){
    this.collegelist = this.collegedata.getcollegedata();
  }

  getMyStudentList(){
    this.stlist = this.example.getMyStudentList();

  this.stlist.subscribe({
    next(x){
      console.log(x)
    }
  })
 
  }

  getunicast(){
    let uni1 = this.example.unicast();
    console.log(this.uni)
  uni1.subscribe(data=>{
      console.log("sub1  " + data)
    }) 

  uni1.subscribe(data=>{
    console.log("sub2  " + data)
  }) 
}
getsubject(){
  let subject = this.example.subjectex();
  subject.subscribe(data=>{
    console.log(data)
  });
  subject.next(10)
  subject.next(5262)
}
multicasting(){
 // this.example.multicast()
 // this.example.subjectmultiExample()
 //this.example.subjectmultiwithoutconnect();
 //this.example.behavioursub()
//this.example.replaysubject()
// this.example.asyncsub();
 let myobs = this.example.trail()
 myobs.subscribe(data => {
   console.log(data)
  })
}
}


