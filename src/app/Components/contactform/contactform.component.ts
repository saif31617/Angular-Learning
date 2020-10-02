import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { ContactformService } from '../../Services/contactform.service';
import { contactUser } from '../../Components/contactform/contactformInterface';



//class name           //profession.ts 
import { Professions } from './profession';
import { from } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  //Create object 
  public add_data_post = {};

  public arr_contact = [];

  public title: string = 'first-angular-project';
  public count: number = 0;
  public contactForm: FormGroup;
  public submitted: boolean = false;
  public isDisplayform: boolean = false;
  public OnsubmitMessage = "";
  public OnclickMessage = "";

  public arr = [];


  public myclass2: string = "myclass2";

  public haserorr: boolean = false;
  public isSpecial: boolean = true;

  public color = "blue";

  public testid;
  public invalid: boolean = false;

  public MessageClasses;

  //array of profession type class
  profession: Professions[];


  public titleStyles = {

    color: "grey",
    fontStyle: "italic"
  }

  updateColor(event) {

    console.log(event);
    this.color = "red";
    this.OnsubmitMessage = "Sucessfull Submission";

  }






  constructor(private formBuilder: FormBuilder, private contactService: ContactformService) {


    this.title = "project1";


  }

  ngOnInit() 
  {
    this.title = "project2";


    this.contactService.getData()
      .subscribe(data => {
        console.log(data);
        this.arr_contact = data
      });




    this.contactForm = this.formBuilder.group
      ({
        Fname: ['', Validators.required],
        Lname: ['', Validators.required],
        Password: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        Zipcode: ['', [Validators.required, Validators.minLength(5)]]

      });




      
    this.testid = "myid";

    this.profession = this.contactService.GetUserDetails();

    // this.profession= [];
  }




  onsubmit() {



    if (this.contactForm.invalid)
    {
      console.log("Invalid form");
      this.invalid = true;
      this.haserorr = true;
      this.MessageClasses =
      {
        "text-success": !this.haserorr,
        "text-danger": this.haserorr
      }
      return false;


    }



    // this.invalid = false;
    this.haserorr = false;

    this.MessageClasses =
    {
      "text-success": !this.haserorr,
      "text-danger": this.haserorr,
      "text-special": this.isSpecial
    }

    console.log("Valid form");
    this.submitted = true;

    var data = {
      fname: this.contactForm.value.Fname,
      lname: this.contactForm.value.Lname,
      email: this.contactForm.value.Email,
      password: this.contactForm.value.Password,
      zipcode: this.contactForm.value.Zipcode
    }

    console.log(data);
    this.arr.push(data);
    console.log(this.arr);


  }

  public OnClickMe() {
    console.log('Click Me');
    this.OnclickMessage = "Welcome To angular";

    // this.isDisplayform = !this.isDisplayform;

    console.log(this.isDisplayform);

    if (this.isDisplayform == true) {
      this.isDisplayform = false;
      console.log(this.isDisplayform);
    }
    else {
      this.isDisplayform = true;
      console.log(this.isDisplayform);
    }



    this.add_data_post = {
      userId: 11,
      title: "Test",
      body: "Hello World"
    }



    // this.contactService.adddata(this.add_data_post).toPromise().then((data: any) => {
    //   console.log(data);
    // });

    this.contactService.adddata(this.add_data_post).subscribe(data => {
      console.log(data);
    });



  }


}



