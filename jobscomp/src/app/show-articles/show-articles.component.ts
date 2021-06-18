import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent implements OnInit {
articles:any = []
  constructor(private _user:UserservicesService) { }

  ngOnInit(): void {
   this.showarticle()
  }
 showarticle(){
    this._user.showarticle().subscribe(res=>{
      console.log(res)
      this.articles= res

       })
  }
  
}
