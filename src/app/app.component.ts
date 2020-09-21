import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string  = 'first-angular-project';
  public count:number = 0;
  public contactForm:FormGroup;
  

  constructor() {

    this.title="project1";
  }

 
 
 
 
}