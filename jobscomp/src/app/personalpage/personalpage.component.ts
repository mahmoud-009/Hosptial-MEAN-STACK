import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-personalpage',
  templateUrl: './personalpage.component.html',
  styleUrls: ['./personalpage.component.css']
})
export class PersonalpageComponent implements OnInit {
  data :any =[]
  pictureForm = new FormGroup({
    picture:new FormControl()

  })
  articles:any = []
  constructor(public _userService:UserservicesService,private _router: Router) {
    if (!_userService.userStatus){
    _router.navigate(['/signin'])
    }

  }

  ngOnInit(): void {
this.showminearticles(),
this.mypage()

  }

  showminearticles(){

    this._userService.showminearticles().subscribe(res=>{
      console.log(res)
      this.articles =res
    })
  }
  // upload(){

  //   console.log(this.pictureForm.value)
  //   this._userService.uploadpic(this.pictureForm.value).subscribe(res=>{
  //     console.log(res)
  //     console.log('1111111')
  //   })
  // }
  mypage() {
    this._userService. mypage().subscribe(res=>{
      console.log(res)

this.data.push(res)



    })
  }


}
