import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';
@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.css']
})
export class ActivateaccountComponent implements OnInit {

  constructor(private _user:UserservicesService,private _aRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  activateaccount(){

    let id = this._aRoute.snapshot.params.id
    this._user.activateaccount(id).subscribe(res=>{
      console.log(res)
  })
}
}
