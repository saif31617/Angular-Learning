import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { ContactformComponent } from './Components/contactform/contactform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactformService } from './Services/contactform.service';




const appRouts: Routes = [
  {
    path: 'contactForm',
    component: ContactformComponent
  },

  {
    path: '',
    redirectTo: '/contactForm',
    pathMatch:'full'

  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRouts

    ),
    BrowserAnimationsModule
  ],
  providers: [ContactformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
