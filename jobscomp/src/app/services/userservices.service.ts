import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  public userStatus=localStorage.getItem('userStatus')||false

  commonUrl='http://localhost:3000'
  constructor(private _http:HttpClient) { }

  submitrequest(userReq:any):Observable<any>{
    return this._http.post(`${this.commonUrl}/addrequest`,userReq)
  }



  showallrequests():Observable<any>{
    return this._http.get(`${this.commonUrl}/allrequests`)
  }
  removeRequest(id:any):Observable<any>{
    return this._http.delete(`${this.commonUrl}/requset/${id}`)
  }
  addarticle(article:any):Observable<any>{
    return this._http.post(`${this.commonUrl}/addarticle`,article)
  }
  showarticle():Observable<any>{
    return this._http.get(`${this.commonUrl}/showarticles`)
  }
  booking(book:any):Observable<any>{
    return this._http.post(`${this.commonUrl}/addBooking`,book)
  }
  showbooking():Observable<any>{
    return this._http.get(`${this.commonUrl}/showBooking`)
  }
  doctorRegsiter(doctor:any):Observable<any>{
    return this._http.post(`${this.commonUrl}/register`,doctor)
  }
  showDoctor():Observable<any>{
    return this._http.get(`${this.commonUrl}/showdoctors`)
  }
  doctorprofile():Observable<any>{
    return this._http.get(`${this.commonUrl}/doctorprofile`)
  }

  activateaccount(id:any):Observable<any>{
    return this._http.get(`${this.commonUrl}/activate/${id}`)
  }
  signinme(userLoginData: any):Observable<any>{
    return this._http.post(`${this.commonUrl}/login`, userLoginData)

  }
  showminearticles():Observable<any>{
    return this._http.get(`${this.commonUrl}/posts`)
  }
  mypage():Observable<any>{
    return this._http.get(`${this.commonUrl}/mypage`)
  }
  logout():Observable<any>{
    return this._http.post(`${this.commonUrl}/logout`,null)
  }
  uploadpic(pic:any):Observable<any>{
    return this._http.post(`${this.commonUrl}/profile`,pic)
  }


  searchfrom():Observable<any>{
    return this._http.get(`${this.commonUrl}/finddoctor/`,)
  }

}
