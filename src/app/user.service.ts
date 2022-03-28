import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  getUser(): Observable<object>{
   return this.http.get<object>('https://jsonplaceholder.typicode.com/users')
  }
}
