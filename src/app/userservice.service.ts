import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  getData()
  {
    let url="https://gorest.co.in/public-api/users";
    return this.http.get<any>(url);
  }
  postData(data: Object)
  {
    let url="https://gorest.co.in/public-api/users";
    console.log(data);
    return this.http.post<any>(url,data);
  }

}
