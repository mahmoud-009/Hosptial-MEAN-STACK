import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginUser = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  })
  constructor(private _user:UserservicesService,private _router: Router) { }

  ngOnInit(): void {
  }
  signinMe(){
      this._user.signinme(this.loginUser.value).subscribe(res=>{
        console.log(res)
        let token = 'Bearer '+ res.data.token
        console.log(token)
        localStorage.setItem('token', token)
        localStorage.setItem('userStatus','true')
        this._user.userStatus=true
        this.loginUser.reset()
        console.log(res.data.user._id)
        this._router.navigate([`/mypage/${res.data.user._id}`])
         })

  }
}
