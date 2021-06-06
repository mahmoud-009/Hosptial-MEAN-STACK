import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
 
import { UserservicesService } from 'src/app/services/userservices.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(public _userServie:UserservicesService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    console.log('hi from interceptor')
    let token:any = localStorage.getItem('token')
    if (token){
      this._userServie.userStatus=true
      request = request.clone(
        {headers: request.headers.set(
          'Authorization',
          token)}
      )
    }
    return next.handle(request);
  }
}
