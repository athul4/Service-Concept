import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class comp2Component implements OnInit {

  constructor(private sample2:SampleServiceService) { }
  comp2Array:any=[];

  ngOnInit(): void {
    this.comp2Array=this.sample2.getDistricts();
  }

}
