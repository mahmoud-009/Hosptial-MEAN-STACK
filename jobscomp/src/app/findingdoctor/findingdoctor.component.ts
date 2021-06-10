import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';
@Component({
  selector: 'app-findingdoctor',
  templateUrl: './findingdoctor.component.html',
  styleUrls: ['./findingdoctor.component.css']
})
export class FindingdoctorComponent implements OnInit {
  doctors:any =[]
  constructor(private _userService:UserservicesService) { }

  ngOnInit(): void {
    this.showDoctor()
  }
  showDoctor(){

    this._userService.showDoctor().subscribe(res=>{
      console.log(res)
      this.doctors =res
    })
  }
}
