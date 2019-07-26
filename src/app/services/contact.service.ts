import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { serverURL } from '../server-url';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /*private readonly URL = 'http://192.168.1.171:8080/mail';*/

  constructor(private http: HttpClient) { }

  send(data: Contact): Promise<null> {
    return this.http.post<null>(serverURL, data, { withCredentials: true }).toPromise();
  }
}