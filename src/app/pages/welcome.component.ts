import { Component,OnInit,AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit,AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(){
    setTimeout(() => {this.router.navigate(['/dashboard'])},3000);
  }
  ngAfterViewInit(){
    //
  }
}
