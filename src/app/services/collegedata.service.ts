import { Injectable } from '@angular/core';
import {collegelist} from "../services/mock"

@Injectable({
  providedIn: 'root'
})
export class CollegedataService {

  constructor() { }
  getcollegedata(){
    return collegelist;
  }

}
