import { Injectable } from '@angular/core';
import {Observable, Subject, from, ConnectableObservable,interval, BehaviorSubject, ReplaySubject, AsyncSubject} from "rxjs";
import { multicast, refCount } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExempleService {

  constructor() { }
  getMyStudentList(){
    let studentList = [{
                collegeId:"",
                studentList:[{name:"siva",
                                studentid:'412'}]
            },
            {
                collegeId:"",
                studentList:[{name:"sai",
                                studentid:'413'}]
            }];
       
        const myObservable = new Observable(subscriber => {
          try{

         
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            setTimeout(()=>{
                subscriber.next(studentList)
            },1000);
            setTimeout(()=>{
              subscriber.next(studentList)
              subscriber.complete()
          },2000);
          setTimeout(()=>{
            subscriber.next(studentList)
            
        },6000);

          } catch (err){
            subscriber.error(err)
          }
            
            
        });
        return myObservable;
      }
      rnum = Math.random()
unicast(){
  const myobser = Observable.create(observer=>{
    observer.next(this.rnum);
  });
  return myobser;
}
subjectex(){
  const mysubject = new Subject<number>();
  return mysubject
}
multicast(){
let myarr = [1,5,6]
  const mysubject = new Subject<number>();
  const num$ = from(myarr);
  mysubject.subscribe(data=>{
    console.log(data)
  });
  num$.subscribe(mysubject);

}
subjectmultiExample(){
  let myarr = [8,15,5]
  const mysubject$ = new Subject<number>();
  const source$ = from(myarr);
  const multi$ = source$.pipe(multicast((mysubject$))) as ConnectableObservable<number>;

 multi$.subscribe(data => console.log("observable 1" , data))
 multi$.subscribe(data => console.log("observable 2" , data))
multi$.connect();

//source$.subscribe(mysubject$)
}

subjectmultiwithoutconnect(){
  let sub1,sub2;
  let source = interval(500);
  const mysub$ = new Subject();
  const refcounted = source.pipe(multicast(mysub$),refCount()) as ConnectableObservable<any>;
  sub1 = refcounted.subscribe(v=> console.log("subscription 1 " , v));
  sub2 = refcounted.subscribe(v=> console.log("subscrption 2 " , v));
  setTimeout(() => {
    sub2.unsubscribe();
    sub1.unsubscribe();
    console.log("break")
  }, 3000);
}
behavioursub(){
  const sub = new BehaviorSubject(5)
  //sub.subscribe(v=> console.log("sub 1 " , v));
  sub.next(10);
  sub.next(20);
  sub.subscribe(v=> console.log("sub 2 " , v))
  sub.next(40)
  sub.next(100);
}
replaysubject(){
  const sub = new ReplaySubject(1)
  //sub.subscribe(v=> console.log("sub 1 " , v));
  sub.next(10);
  sub.next(20);
  sub.next(30);
  sub.subscribe(v=> console.log("sub 2 " , v))
  sub.next(40)
  sub.next(50)
  sub.next(60)
  sub.subscribe(v=> console.log("sub 3 " , v))
  sub.next(70)
}
asyncsub(){
  const sub = new AsyncSubject()
  sub.subscribe(v=> console.log("sub 1 " , v));
  sub.next(10);
  sub.next(20);
  sub.subscribe(v=> console.log("sub 2 " , v))
  sub.next(40)
  sub.next(70)
  sub.complete()
}
trail()
{
  let myob
return  myob = new Observable(sub=>{
    sub.next(5)
  });
// myob.subscribe(data=>console.log(data))
}

}
