import { Component,OnInit } from '@angular/core';
//import {CognitoUtil} from 'amazon-cognito-identity-js-node/src';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
//import $ from "jquery";
import 'assets/js/AWSlogin.js'
import { Router,ActivatedRoute } from "@angular/router";
declare var myExtObject: any;

var vresult:string;

@Component({
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;
  myForm :FormGroup;

  constructor(formBuilder : FormBuilder,private router: Router,private _route : ActivatedRoute) {
 this.myForm = formBuilder.group({
   'email':['',[Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
   'password':['',[Validators.required,Validators.minLength(6)]]
 })
   }
  
  alert(hi :string){
    alert(hi);
  }
awsloginforscript(){
vresult=myExtObject.func1();
console.log(vresult);
}

ngOnInit(){
  myExtObject.func2();
}

fbLogin(){
  //myExtObject.func3();
  this.router.navigateByUrl("/pages/register");
}
  

}
