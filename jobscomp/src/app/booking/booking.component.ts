import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm = new FormGroup({
    name:new FormControl(),
    number:new FormControl(),
    email:new FormControl(),
    medicalDepartment:new FormControl(),
    doctorName:new FormControl(),
    date:new FormControl()
  })
  constructor(private _user:UserservicesService) { }

  ngOnInit(): void {
  }
  booking(){
    this._user.booking(this.bookingForm.value).subscribe(res=>{
      console.log(res)
      this.bookingForm.reset()
       })
  }
}





