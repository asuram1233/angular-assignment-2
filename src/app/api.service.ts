import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { timeout } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  errorData = new Subject();
  constructor(private hc: HttpClient) {}

  getDataTest() {
    this.hc
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(timeout(15000));
  }
}
