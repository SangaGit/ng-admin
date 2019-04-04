import { Component, ViewChild, ViewChildren, Input, QueryList } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';




@Component({
   templateUrl: 'ecg-account-info.component.html',
   styleUrls:['ecg-account-info.component.css']
})
export class EcgAccountInfoComponent  {
    accountInfoOrderForm : FormGroup;
    public submitted: boolean;
    @ViewChildren('input') inputs:QueryList<'input'>
    //phone mask
    public phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    states : string[]=['SL','USA','UK','AUS'];

    constructor(formBuilder:FormBuilder) {
        this.accountInfoOrderForm=formBuilder.group({
            //ECG Account Information/Settings
            'fname':['',[Validators.required,Validators.pattern("^[A-z]+$")]],
            'lname':['',[Validators.required,Validators.pattern("^[A-z]+$")]],
            'phone':['',[Validators.required,
                        CustomValidators.phone('LK')]],
            'email':['',[Validators.required,
                        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            'state':['',[Validators.required]],
            'city':['',[Validators.required,Validators.pattern("^[A-z]+$")]],
            'zip':['',[Validators.required]],
            'assistanceCheckbox':['']
        })
    }
    onSubmit(){
        this.submitted = true;
        console.log(this.inputs.length);
        this.inputs.forEach(el => {
           console.log(el);
        });
        alert('Hi!');
    }
}