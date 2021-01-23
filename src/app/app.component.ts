import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Assignment-Timeout";

  constructor(private as: ApiService) {
    this.as.errorData.subscribe(res => {
      this.errorMessage = res;
    });
  }

  errorMessage: any = "loading";

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData() {
    // setTimeout(() => {
    this.as.getDataTest();
    // }, 15000);
  }
}
