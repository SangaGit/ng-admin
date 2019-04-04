import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';




@Component({
   templateUrl: 'getting-startwith-ecg.component.html',
   styleUrls:['getting-startwith-ecg.component.css']
})
export class GettingStartWithEcgComponent  {
    gettingStartEcgForm : FormGroup;
    public submitted: boolean;

    constructor(formBuilder:FormBuilder) {
        this.gettingStartEcgForm=formBuilder.group({
            //Getting Started with ECG
            'signature':['',[Validators.required,Validators.pattern("^[A-z]+$")]],
            'dealerid':['',Validators.required],
            'name':['',[Validators.required,Validators.pattern("^[A-z]+$")]],
            'dealerarea':['',Validators.required],
            'dealerSaleType':['',Validators.required],
            'date':['',Validators.required]
        })
    }
    onSubmit(){
        this.submitted = true;
        alert('Hi!');
    }
}