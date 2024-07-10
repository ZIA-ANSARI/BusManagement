import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  displayName: string = "John Doe";
  balance: number = 10;
  token:string = ""
  baseUrl= "http://localhost:8080"
  constructor(private http: HttpClient) {}



  loginUser(email: string, password: string){
    let url = this.baseUrl + "/auth/login";
    console.log(url);

    let body = {
      "email" : email,
      "password" : password
  }
  console.log(body);

    this.http.post(url, body).subscribe((response ) => {
      if(response['token']){
        this.token = response['token']
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
        const options = {
          headers: headers
        }
      }
    })
  }
}
