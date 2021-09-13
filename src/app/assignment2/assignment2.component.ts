import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  binaryNum=0;
  tempArr=[];
  constructor() { }

  ngOnInit(): void {
  }

  removeAdd(){
    if(this.binaryNum===0){
      this.binaryNum=this.binaryNum+1;
    } else{
      this.binaryNum=this.binaryNum-this.binaryNum;
    }
    var timestamp = new Date().getTime();
    this.tempArr.push(timestamp);
    console.log(this.tempArr);
    return this.binaryNum;
  }

}
