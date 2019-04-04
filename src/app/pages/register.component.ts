import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { Http,Headers } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { EqualTextValidator } from "angular2-text-equality-validator";
import { CustomValidators } from 'ng2-validation';
import{ RegistrationService} from '../services/registration.service';
import 'rxjs/Rx';


@Component({
  templateUrl: 'register.component.html',
  styleUrls:['register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup;
  states : string[]=['SL','USA','UK','AUS'];

  constructor(formBuilder : FormBuilder,private registrationService :RegistrationService,private router: Router) {
    // this.registerForm =formBuilder.group({
    //   'fname':['',[Validators.required]],
    //   'lname':['',[Validators.required]],
    //   'phone':['',[Validators.required,
    //               CustomValidators.phone('LK'),Validators.maxLength(10)]],
    //   'email':['',[Validators.required,
    //               Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
    //   'password':['',[Validators.required,Validators.minLength(6)]],
    //   'cpassword':['',[Validators.required]],
    //   'state':['',[Validators.required]],
    //   'city':['',[Validators.required]],
    //   'zip':['',[Validators.required]]
    // }
    // )
   }

   signup(){
  //    let user : User ={
  //     password : this.registerForm.controls['password'].value,
  //     fName:this.registerForm.controls['fname'].value,
  //     lName : this.registerForm.controls['lname'].value,
  //     email:this.registerForm.controls['email'].value
  //    }
  //    this.registrationService.signUp(user).subscribe(res =>alert(res.json().message),
  //                                                    err => console.log(err),
  //                                                    ()=>{this.router.navigate(['/pages/welcome'])} );
   }

}
