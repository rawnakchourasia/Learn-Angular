import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  userNameIs = "";
  constructor() { }

  ngOnInit(): void {
  }

  getUsername(){
    return ("The username is "+this.userNameIs+'.');
  }
  checkUser(){
    if(this.userNameIs==''){
      return false;
    }
    else{
      return true;
    }
  }
  resetUser(){
    this.userNameIs="";
  }
}
