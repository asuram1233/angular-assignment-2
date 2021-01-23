import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  errorData = new Subject();
  constructor(private hc: HttpClient) {}

  getDataTest(): Observable<any> {
    return this.hc.get(`https://jsonplaceholder.typicode.com/post`);
  }
}
