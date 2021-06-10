import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  doctors:any=[]
doctorForm = new FormGroup({
  name:new FormControl(),
  number:new FormControl(),
  email:new FormControl(),
  Specialty:new FormControl(),
  password:new FormControl(),
  acadimic:new FormControl(),
  userProfile:new FormControl()
})
  constructor(private _user:UserservicesService,private _router: Router) { }

  ngOnInit(): void {
    this.showDoctors()
  }
  submitrequest(){

    this._user.doctorRegsiter(this.doctorForm.value).subscribe(res=>{

      console.log(res)
      this.doctorForm.reset()
      this._router.navigateByUrl(`activate/${res.data._id}`)
       })

       this.uploadpic()
  }
  showDoctors(){
    this._user.showDoctor().subscribe(res=>{
      console.log(res)
      this.doctors=res
       })
  }

  uploadpic(){
    this._user.uploadpic(this.doctorForm.value).subscribe(res=>{
      console.log(res)
       })
  }
}
