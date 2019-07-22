import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly URL = 'http://192.168.1.231:8080/registration';

  constructor(private http: HttpClient) { }

  addUser(user: User): Promise<User> {
    return this.http.post(this.URL, user , { withCredentials: true })
      .toPromise() as Promise<User>;
  }
}