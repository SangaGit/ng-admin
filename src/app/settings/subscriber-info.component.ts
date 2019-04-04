import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';




@Component({
   templateUrl: 'subscriber-info.component.html',
   styleUrls:['subscriber-info.component.css']
})
export class SubscriberInfoComponent  {
    subscriberInfoForm : FormGroup;
    public submitted: boolean;

    //phone mask
    public phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(formBuilder:FormBuilder) {
        this.subscriberInfoForm=formBuilder.group({
            //Subscriber's Information/Monitoring Information
            'subscriberdealerid':[''],
            'accTypSelect':[''],
            'xmid':[''],
            'orbid':[''],
            'subscriberfname':['',Validators.required],
            'subscriberlname':['',Validators.required],
            'subscriberemail':['',[Validators.required,
                        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            'dob':['',Validators.required],
            'pno':['',[Validators.required,
                       CustomValidators.phone('LK')]],
            'spno':['',[CustomValidators.phone('LK')]],
            'timeZone':['',Validators.required],
            'physicalAddress':['',Validators.required],
            'subAptUnit':[''],
            'subState':['',Validators.required],
            'subCity':['',Validators.required],
            'subZip':['',Validators.required],
            'setupType':[''],
            'setupPersonName':[''],
            'setupPersonPhone':['',[CustomValidators.phone('LK')]],
            'standardPhoneLine':['',Validators.required],
            'dsl':[''],
            'phoneServiceProvider':[''],
            'mrt1':[''],
            'mrt2':[''],
            'mrt3':[''],
            'mrt4':[''],
            'mrt5':[''],
            'mrt6':[''],
            'mrt7':[''],
            'mrt8':[''],
            'issCheckBox1':[''],
            'issCheckBox2':[''],
            'issAm1':[''],
            'issAm2':[''],
            'issPm1':[''],
            'issPm2':['']
        })
    }
    onSubmit(){
        this.submitted = true;
        alert('Hi!');
    }
}