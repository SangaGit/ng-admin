import { Component, OnInit,ElementRef} from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';
declare var jQuery : any;

@Component({
    selector:'order_confirm',
    templateUrl:'order-confimation.component.html',
    styleUrls:['order-confimation.component.css']
})

export class OrderConfimationComponent implements OnInit{
    orderconfirmForm : FormGroup;
    submitted:boolean;
    inputNames=['qty0','qty1','qty2','qty3'];

    constructor(private formBuilder:FormBuilder,private _router:Router,private elementRef:ElementRef){
        this.orderconfirmForm =formBuilder.group({
            'qty0':['',[Validators.required,CustomValidators.gt(-1)]],
            'qty1':['',[Validators.required,CustomValidators.gt(-1)]],
            'qty2':['',[Validators.required,CustomValidators.gt(-1)]],
            'qty3':['',[Validators.required,CustomValidators.gt(-1)]]
        })
    }

    ngOnInit(){
        console.log(this.orderconfirmForm);
        
    }

    proceedCheckout(){
        this.submitted=true;
        let keepGoing=true;
        //this._router.navigate(['/pages/order']);
        this.inputNames.forEach((name)=>{
            debugger;
            if(keepGoing){
                let input = this.orderconfirmForm.get(name);
                if(!input.valid){
            console.log(input);
            jQuery(this.elementRef.nativeElement).find('#'+name).focus();
            keepGoing=false;
           }
            }
        });
        
    }
    discountCheck(){
        alert('Hi there!');
    }
}