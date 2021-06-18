import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

import { FormappComponent } from './applyforjob/formapp.component';
import { NavComponent } from './shared/nav/nav.component';
import { ShowRequestsComponent } from './show-requests/show-requests.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking/booking.component';
import { ShowbookingComponent } from './showbooking/showbooking.component';
import { SigninComponent } from './signin/signin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { PersonalpageComponent } from './personalpage/personalpage.component';
import { FindingdoctorComponent } from './findingdoctor/findingdoctor.component';
import { RegisterComponent } from './register/register.component';
import { ActivateaccountComponent } from './activateaccount/activateaccount.component';
import { UserInterceptor } from './providers/interceptors/user.interceptor';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FormappComponent,
    NavComponent,
    ShowRequestsComponent,
    AddArticlesComponent,
    ShowArticlesComponent,
    HomepageComponent,
    BookingComponent,
    ShowbookingComponent,
    SigninComponent,
    AdminpanelComponent,
    PersonalpageComponent,
    FindingdoctorComponent,
    RegisterComponent,
    ActivateaccountComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule



  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
