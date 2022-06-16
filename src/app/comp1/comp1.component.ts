import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class comp1Component implements OnInit {

  constructor(private sample1:SampleServiceService) { }
  public comp1Array:any=[];

  ngOnInit(): void {
    this.comp1Array=this.sample1.getDistricts();
  }


}
