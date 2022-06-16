import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor() { }
  districts:any=[
    {id:1,name:'Palakkad'},
    {id:2,name:'Calicut'},
    {id:3,name:'Thrissur'},
    {id:4,name:'Kollam'},
    {id:4,name:'Idukki'},
    {id:4,name:'Wayanad'},
  ]
  getDistricts(){
    return <any>(this.districts);
  }
}
