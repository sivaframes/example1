import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataconversion'
})
export class DataconversionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]=="kilobyte"){
      return value/1024 + " KB"
    }else if(args[0]=="megabyte"){
      return value/1024/1024 + " MB"
    }else(args[0]=="gigabyte")
    {
      return value/1024/1024/1024 +" GB"
    }

    }
  
  }

