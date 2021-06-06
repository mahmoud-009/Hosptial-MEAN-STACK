import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showbooking(){
    this.router.navigate(['/showbooking']);
  }
  addArticles(){
    this.router.navigate(['/addarticles'])
  }
  showJobRequests(){
    this.router.navigate(['/showrequests'])
  }
  doctorRegister(){
    this.router.navigate(['/register'])
  }
}
