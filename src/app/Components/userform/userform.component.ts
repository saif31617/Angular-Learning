import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { ContactformService } from '../../Services/contactform.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {


  //Create object 
  public add_data_post = {};
  public invalid: boolean = false;
  public Apiform: FormGroup;
  public submitted: boolean = false;

  constructor(private formbuilder: FormBuilder,private contactService: ContactformService) { }

  ngOnInit(): void {


    this.Apiform = this.formbuilder.group
      ({
        User_Id: ['', [Validators.required,Validators.minLength(5)]],
        Title: ['', Validators.required],
        Body: ['',Validators.required]
        



      });


  }


  onsubmit() {



    if (this.Apiform.invalid)
    {
      console.log("Invalid form");
      this.invalid = true;

      return false;
    }



    var data = {
      user_id: this.Apiform.value.User_Id,
      title: this.Apiform.value.Title,
      body: this.Apiform.value.Body
      
    }

    console.log(data);
    console.log("Valid form");
    this.submitted = true;
    

    this.add_data_post = {
      userId: this.Apiform.value.User_Id,
      title:  this.Apiform.value.Title,
      body: this.Apiform.value.Body
    }
    
    this.contactService.adddata(this.add_data_post).subscribe(data => {
      console.log(data);
    });

  }
}
