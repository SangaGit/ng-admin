import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';




@Component({
   templateUrl: 'billing-info.component.html',
   styleUrls:['billing-info.component.css']
})
export class BillingInfoComponent  {
    billingInfoForm : FormGroup;
    public submitted: boolean;

    //phone mask
    public phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(formBuilder:FormBuilder) {
        this.billingInfoForm=formBuilder.group({
            //Billing Information
            'billAddress':[''],
            'billPhysicalAddress':[''],
            'billAptUnit':[''],
            'billPhone':['',[Validators.required,CustomValidators.phone('LK')]],
            'billCity':[''],
            'billState':[''],
            'billZip':['']
        })
    }
    onSubmit(){
        this.submitted = true;
        alert('Hi!');
    }
}