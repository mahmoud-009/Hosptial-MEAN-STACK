import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  doctor:any = []
  constructor(private _userService:UserservicesService , private _router:Router) { }

  ngOnInit(): void {
    if (this._userService.userStatus){
      this.mypage()
    }

  }

  mypage(){
    this._userService.mypage().subscribe(res=>{
      console.log(res)
      this.doctor= res
      console.log(res._id)

       })
  }

  logout(){
    if (this._userService.userStatus){

   this._userService.logout().subscribe(res=>{
      console.log(res)
      localStorage.removeItem('token')
      localStorage.removeItem('userStatus')
      this._userService.userStatus=false
  })
    }

}
}
