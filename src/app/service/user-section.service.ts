import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserSectionService {
  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/user';

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<UserModel[]>{
      return this.http.get<UserModel[]>(this.url);
  }
}
