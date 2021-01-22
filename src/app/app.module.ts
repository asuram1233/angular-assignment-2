import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DEFAULT_TIMEOUT, TimeoutInterceptor } from "./timeout-interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }],
    [{ provide: DEFAULT_TIMEOUT, useValue: 150 }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
