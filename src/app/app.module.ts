import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactformService } from './Services/contactform.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{ AppRoutingModule , routingComponent } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    routingComponent
    
  
    


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],

  providers: [ContactformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
