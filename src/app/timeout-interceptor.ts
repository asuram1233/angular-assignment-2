import { Inject, Injectable, InjectionToken } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, timeout } from "rxjs/operators";
import { ApiService } from "./api.service";

export const DEFAULT_TIMEOUT = new InjectionToken<number>("defaultTimeout");

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(
    @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
    private as: ApiService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const timeoutValue = req.headers.get("timeout") || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue);

    return next.handle(req).pipe(
      timeout(timeoutValueNumeric),
      catchError(error => {
        this.as.errorData.next(error.message);
        return throwError;
      })
    );
  }
}
