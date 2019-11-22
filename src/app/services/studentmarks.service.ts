import { Injectable } from '@angular/core';
import {Observable,of, concat, from} from "rxjs"
import { filter,map, first, tap, switchMap,last  , take,skip, startWith, endWith, withLatestFrom, distinctUntilChanged, reduce, scan} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentmarksService {

  constructor() { }
  subjectlist = [{
            id:1,
            subject:"ET",
            marks:99
  },
  {
    id:2,
    subject:"ES",
    marks:100
}]
displaysubjectmarks(){
  let obser$ = new Observable(observer=>{
    observer.next(this.subjectlist);
    observer.complete();
  })
  return obser$;
}
display(){
  let arr = [2,4,3,6];

  const num$ = of(...arr);
  
  return num$
  .pipe(
   reduce((acc,cv) => acc + cv)
 //  switchMap(x=>of(x*2,x*3))
  );
}
rnum = Math.random()
unicast(){
  const myobser = Observable.create(observer=>{
    observer.next(this.rnum);
  });
  return myobser;
}
}

//map == works on each and every value;
//switchMap == works on each and every value and we can use of(no of arguments)
//last() == returns onlu last value;
//first() == returns only first value;
//take() == its expect arguments it will returns uptgo that values;
//skip() == its expect arguments it will skip the no of values in give argument vakues;
//tap() == ui can give any logic but it will give only mirror of given observable
//strtaswith() == it will add wat u giv en in arguments to observables
//endwith() == it will add values end of tghe observable;
//distinctUntilChanged =we have duplicate values in a series it will remove that duplicates
//reduce == same like arraymethods
//scan == it will return 1st nom and 2nd nom as 1stno + 2nd Nom
