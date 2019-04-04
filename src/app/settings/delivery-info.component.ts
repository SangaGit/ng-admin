import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';




@Component({
   templateUrl: 'delivery-info.component.html',
   styleUrls:['delivery-info.component.css']
})
export class DeliveryInfoComponent  {
    deliveryInfoForm : FormGroup;
    public submitted: boolean;

    //phone mask
    public phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(formBuilder:FormBuilder) {
        this.deliveryInfoForm=formBuilder.group({
            //Delivary Information
            'deliveryBillAddress':[''],
            'deliveryAddress':[''],
            'deliveryApiUnit':[''],
            'deliveryCity':[''],
            'deliveryState':[''],
            'deliveryZip':[''],
            'packageReciptName':['',Validators.required],
            'packageReciptPhone':['',[Validators.required,CustomValidators.phone('LK')]]
        })
    }
    onSubmit(){
        this.submitted = true;
        alert('Hi!');
    }
}