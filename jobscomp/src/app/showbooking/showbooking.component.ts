import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {
bookings:any =[]
  constructor(private _user:UserservicesService) { }

  ngOnInit(): void {
    this.showbooking()
  }
  showbooking(){
    this._user.showbooking().subscribe(res=>{
      console.log(res)
      this.bookings= res

       })
  }

}
