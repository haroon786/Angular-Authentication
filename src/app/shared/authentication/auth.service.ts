import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { IUser } from 'src/app/user-modal/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   URL='localhost/4200';
  constructor(private http:HttpClient) { }

  login(email:string,password:string)
  {
     return this.http.post<IUser>(`${this.URL}/api/login`,{email,password})
    // .shareReplay()
  }
}
