import { Component, OnInit, ElementRef, ViewEncapsulation } from "@angular/core";
declare var jQuery:any;

@Component({
    templateUrl: 'perchased-product.component.html',
    styleUrls:['perchased-product.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PerchasedProductComponent implements OnInit{

    options=['Packages Only','Add-Ons Only'];
    selectedOption="Select Perchased History By";
    constructor(private elementRef:ElementRef) {

    }
    ngOnInit(){
        jQuery(this.elementRef.nativeElement).find('#tblPerchasedProduct').dataTable({"lengthMenu": [ 5,10, 25, 50, 75, 100 ]}).rowGrouping({ bExpandableGrouping: true,iGroupingColumnIndex: 0 });
        jQuery(this.elementRef.nativeElement).find("input[type='search']").addClass("form-control");
        jQuery(this.elementRef.nativeElement).find("select[name='tblPerchasedProduct_length']").addClass("form-control");
    }
    onChange($event:any){
        console.log($event);
    }
}