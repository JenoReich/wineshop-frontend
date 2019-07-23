import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Usercredentials } from '../interfaces/usercredentials'

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly URL = 'http://192.168.1.231:8080';

  constructor(private http: HttpClient) { }

  addUser(user: User): Promise<User> {
    return this.http.post(this.URL + '/registration', user , { withCredentials: true })
      .toPromise() as Promise<User>;
  }

  loginUser(user: Usercredentials): Promise<null> {
      const formData = new FormData();
      formData.append('username', user.email);
      formData.append('password', user.password);
      return this.http.post(this.URL + '/login', formData , { withCredentials: true })
      .toPromise() as Promise<null>;
  }
}
