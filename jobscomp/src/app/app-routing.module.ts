import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateaccountComponent } from './activateaccount/activateaccount.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BookingComponent } from './booking/booking.component';
import { FindingdoctorComponent } from './findingdoctor/findingdoctor.component';
import { FormappComponent } from './applyforjob/formapp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonalpageComponent } from './personalpage/personalpage.component';
import { RegisterComponent } from './register/register.component';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { ShowbookingComponent } from './showbooking/showbooking.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'jobs',component:FormappComponent},
  {path:'showrequests', component:ShowRequestsComponent},
  {path:'addarticles', component:AddArticlesComponent},
  {path:'showarticles', component:ShowArticlesComponent},
  {path:'booking',component:BookingComponent},
  {path:'showbooking',component:ShowbookingComponent},
  {path:'signin',component:SigninComponent},
  {path:'adminpanel',component:AdminpanelComponent},
  {path:'mypage/:id',component:PersonalpageComponent},
  {path:'findingdoctor',component:FindingdoctorComponent},
  {path:'register',component:RegisterComponent},
  {path:'activate/:id',component:ActivateaccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
