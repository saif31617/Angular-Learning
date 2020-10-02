import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactformComponent }  from  './Components/contactform/contactform.component';
import { UserformComponent } from './Components/userform/userform.component'

const routes: Routes = [

   { path: 'Contactform' , component : ContactformComponent },
   { path: 'Userform' , component : UserformComponent  },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   
})
export class AppRoutingModule { }
export const routingComponent = [ ContactformComponent , UserformComponent];