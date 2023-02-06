import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  __userName:String = "userName";

  set userName(username:String){
    this.__userName = username;
  }

  get userName(){
    return this.__userName;
  }

  userNameReset(){
    this.userName="";
  }

  isUserNameEmpty(){
    return this.userName.length===0;
  }
}
