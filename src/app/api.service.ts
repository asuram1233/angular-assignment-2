import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { catchError, map, timeout } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  errorData = new Subject();
  constructor(private hc: HttpClient) {}

  getDataTest(): Observable<any> {
    return this.hc.get(`https://httpstat.us/200?sleep=15000`);
  }
}
