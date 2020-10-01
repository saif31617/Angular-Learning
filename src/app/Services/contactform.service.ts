import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { contactUser } from '../Components/contactform/contactformInterface';

@Injectable({
  providedIn: 'root'
})
export class ContactformService {

  constructor(private httpClient : HttpClient ) { }
  public url="https://jsonplaceholder.typicode.com/users";
   
 public  getData( ) : Observable <contactUser[]>
 {

  return this.httpClient.get<contactUser[]>(this.url);
   
 }

  public GetUserDetails()
  {
    return[
      { id: 1, Name: "Govt officer" },
      { id: 2, Name: "Banker" },
      { id: 3, Name: "Business man" },
      { id: 4, Name: "Contractor" }
    ]
  }
}
