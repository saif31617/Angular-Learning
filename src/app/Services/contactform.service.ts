import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactformService {

  constructor() { }


  public GetUserDetails(): []
  {
    return
    [    
      {id:1,Name:"Govt officer"},
      {id:2,Name:"Banker"},
      {id:3,Name:"Business man"},
      {id:4,Name:"Contractor"}
    ]
  }
}
