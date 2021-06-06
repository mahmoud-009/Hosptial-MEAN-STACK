import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {
  articleForm = new FormGroup({
    articleTopic:new FormControl(),
    article:new FormControl()
  })
  constructor(private _user:UserservicesService) { }

  ngOnInit(): void {
  }

  get articleTopic(){return this.articleForm.get('topic')}
  get article(){return this.articleForm.get('article')}

  addArticle(){
    this._user.addarticle(this.articleForm.value).subscribe(res=>{
      console.log(res)
      this.articleForm.reset()
     })
  }
}
