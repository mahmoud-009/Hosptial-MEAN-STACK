import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';
@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css']
})
export class ShowRequestsComponent implements OnInit {
  data :any =[]
  constructor(private _user:UserservicesService) { }

  ngOnInit(): void {
    this.showallrequests()
  }
  showallrequests(){
    this._user.showallrequests().subscribe(res=>{
      console.log(res)
      this.data= res
       })
  }


  removeRequest(id:any){
const requset = this.data.findIndex((p:any) => p._id === id)


    this._user.removeRequest(id).subscribe(res=>{
this.data.splice(requset, 1)




       })
    // console.log(this.data)
  }
}
