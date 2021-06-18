import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-findingdoctor',
  templateUrl: './findingdoctor.component.html',
  styleUrls: ['./findingdoctor.component.css']
})
export class FindingdoctorComponent implements OnInit {

  searchform  = new FormGroup({
    name:new FormControl()
  })

  doctors:any =[]
  constructor(private _userService:UserservicesService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.showDoctor()

  }
  showDoctor(){

    this._userService.showDoctor().subscribe(res=>{
      console.log(res)
      this.doctors =res
    })
  }
  searchfrom(){

    // this._userService.searchfrom().subscribe(res=>{
    //   console.log(res)

    // })
    let productid = this.activatedRoute.snapshot.params.name;
    console.log(productid);// OUTPUT null

    if(productid === null){
      console.log('productid parameter not found');
    }



  }
}
