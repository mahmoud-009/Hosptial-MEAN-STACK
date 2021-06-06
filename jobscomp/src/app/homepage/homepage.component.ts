import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  medicalon(){
    this.router.navigate(['/showarticles']);
  }
  jobon(){
    this.router.navigate(['/jobs']);
  }
  booking(){
    this.router.navigate(['/booking'])
  }
  finddoctor(){
    this.router.navigate(['/findingdoctor'])
  }
}
