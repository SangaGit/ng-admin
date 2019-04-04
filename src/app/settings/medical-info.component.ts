import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';




@Component({
   templateUrl: 'medical-info.component.html',
   styleUrls:['medical-info.component.css']
})
export class MedicalInfoComponent  {
    medicalInfoForm : FormGroup;
    public submitted: boolean;

    //phone mask
    public phoneMask = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(formBuilder:FormBuilder) {
        this.medicalInfoForm=formBuilder.group({
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
            'spouseSignFullName':['']
        })
    }
    onSubmit(){
        this.submitted = true;
        alert('Hi!');
    }
}