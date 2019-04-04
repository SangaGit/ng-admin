import { Component,OnInit,ElementRef } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';
import {FocusModule} from 'angular2-focus';
import { Http } from "@angular/http";
declare var jQuery:any;
@Component({
    templateUrl: 'order.component.html',
    styleUrls:['order.component.css']
})
export class OrderComponent implements OnInit {
     orderForm : FormGroup;
     public submitted: boolean;
     inputNames = ['fname','lname','phone','email','state','city','zip','signature','dealerid','name',
                   'dealerarea','dealerSaleType','subscriberfname',
                   'subscriberlname','subscriberemail','dob','pno','timeZone','physicalAddress','subState',
                   'subCity','subZip','standardPhoneLine','rpName1','rpMailling1','rpPhone1','rpRelation1','spouseCheckBox',
                   'spouseSign','billPhone','packageReciptName','packageReciptPhone','creditCardName','verifyBillingCheckbox'];
    states : string[]=['SL','USA','UK','AUS'];

    public phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
    public expMask=[/\d/, /\d/, '/', /\d/, /\d/];
    public csvMask=[/\d/, /\d/, /\d/];
    constructor(formBuilder : FormBuilder,private elementRef:ElementRef) {
        this.createForm(formBuilder);
    }
    ngOnInit(){
        console.log(this.orderForm);
    }

    createForm(formBuilder : FormBuilder){
        this.orderForm=formBuilder.group({
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
            'assistanceCheckbox':[''],
            //Getting Started with ECG
            'signature':['',[Validators.required,Validators.pattern("^[A-z]+$")]],
            'dealerid':['',Validators.required],
            'name':['',[Validators.required,Validators.pattern("^[A-z]+$")]],
            'dealerarea':['',Validators.required],
            'dealerSaleType':['',Validators.required],
            'date':['',Validators.required],
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
            'issPm2':[''],
            //Medical Information
            'physicianName':[''],
            'physicianPhone':['',[CustomValidators.phone('LK')]],
            'hospital':[''],
            'mhc':[''],
            'sci':[''],
            'rpName1':['',Validators.required],
            'rpName2':[''],
            'rpName3':[''],
            'rpName4':[''],
            'rpMailling1':['',Validators.required],
            'rpMailling2':[''],
            'rpMailling3':[''],
            'rpMailling4':[''],
            'rpPhone1':['',[Validators.required,CustomValidators.phone('LK')]],
            'rpPhone2':['',[CustomValidators.phone('LK')]],
            'rpPhone3':['',[CustomValidators.phone('LK')]],
            'rpPhone4':['',[CustomValidators.phone('LK')]],
            'rpRelation1':['',Validators.required],
            'rpRelation2':[''],
            'rpRelation3':[''],
            'rpRelation4':[''],
            'spouseName':[''],
            'spouseDob':[''],
            'spouseCheckBox':['',Validators.required],
            'spouseSign':['',Validators.required],
            'spouseSignDate':[''],
            'spouseSignFullName':[''],
            //Billing Information
            'billAddress':[''],
            'billPhysicalAddress':[''],
            'billAptUnit':[''],
            'billPhone':['',[Validators.required,CustomValidators.phone('LK')]],
            'billCity':[''],
            'billState':[''],
            'billZip':[''],
            //Delivary Information
            'deliveryBillAddress':[''],
            'deliveryAddress':[''],
            'deliveryApiUnit':[''],
            'deliveryCity':[''],
            'deliveryState':[''],
            'deliveryZip':[''],
            'packageReciptName':['',Validators.required],
            'packageReciptPhone':['',[Validators.required,CustomValidators.phone('LK')]],
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
        });
    }
    submitForm(){
        console.log(this.orderForm.controls.dob);
        this.submitted = true;
        let keepGoing=true;
        
        let panelId='';
        this.inputNames.forEach((name)=>{
            if(keepGoing){
                let input = this.orderForm.get(name);
                if(!input.valid){
                    debugger;
                        console.log(input);
                       panelId= jQuery("#"+name).attr('panelId');
                        jQuery(this.elementRef.nativeElement).find('#'+panelId).addClass("show");
                        jQuery(this.elementRef.nativeElement).find('#'+name).focus();
                        keepGoing=false;
                    }
            }
        });
    }

    onSelect(data){
        console.log(data);
    }
}