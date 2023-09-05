import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SchoolRegisterComponent } from './school/school-register/school-register.component';

const routes: Routes = [
 
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'register',
    component:SchoolRegisterComponent
  },
  {
    path:'home',
    component:AboutComponent
  },
  {
    path:'',
    component:HomeComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
