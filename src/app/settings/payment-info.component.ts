import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';




@Component({
   templateUrl: 'payment-info.component.html',
   styleUrls:['payment-info.component.css']
})
export class PaymentInfoComponent  {
    paymentInfoForm : FormGroup;
    public submitted: boolean;

    //phone mask
    public phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
    public expMask=[/\d/, /\d/, '/', /\d/, /\d/];
    public csvMask=[/\d/, /\d/, /\d/];

    constructor(formBuilder:FormBuilder) {
        this.paymentInfoForm=formBuilder.group({
            //Payment Information
            'invoiceOnlyCheckBox':[''],
            'paymentOption':[''],
            'paymentName':[''],
            'paymentType':[''],
            'visaCheckBox':[''],
            'masterCheckBox':[''],
            'discoverCheckBox':[''],
            'americanExpCheckBox':[''],
            'creditCardNumber':['',[CustomValidators.creditCard]],
            'creditCardExpDate':[''],
            'creditCardCsv':[''],
            'creditCardName':[''],
            'verifyBillingCheckbox':['',Validators.required]
        })
    }
    onSubmit(){
        this.submitted = true;
        alert('Hi!');
    }
}