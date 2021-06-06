import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-formapp',
  templateUrl: './formapp.component.html',
  styleUrls: ['./formapp.component.css']
})
export class FormappComponent implements OnInit {
userForm = new FormGroup({
  specialty :new FormControl('',[Validators.required]),
   name :new FormControl('',[Validators.required]),
   email :new FormControl('',[Validators.required]),
   age :new FormControl('',[Validators.required]),
   address :new FormControl('',[Validators.required]),
   phone :new FormControl('',[Validators.required]),
   dgree :new FormControl('',[Validators.required])
})
  msg:string=''
  constructor(private _user:UserservicesService) { }

  ngOnInit(): void {

  }
  get specialty(){return this.userForm.get('specialty')}
  get age(){return this.userForm.get('age')}
  get name(){return this.userForm.get('name')}
  get email(){return this.userForm.get('email')}
  get address(){return this.userForm.get('address')}
  get phone(){return this.userForm.get('phone')}
  get dgree(){return this.userForm.get('dgree')}


  submitrequest(){
   this._user.submitrequest(this.userForm.value).subscribe(res=>{
    console.log(res)
    this.userForm.reset()
   })
  }


}
