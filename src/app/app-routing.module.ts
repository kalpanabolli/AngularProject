import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomercomponentComponent } from './customercomponent/customercomponent.component';


const routes: Routes = [
  {path:'',component:CustomercomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
