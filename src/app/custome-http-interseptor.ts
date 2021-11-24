import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { finalize, catchError, retry } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class CustomHttpInterseptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const API_KEY: string = '02b610cebe101e3114c90ad95e8fea58';

    const reqWithApi = req.clone({
      params: new HttpParams()
        .set('api_key', API_KEY)
    });
    return next.handle(reqWithApi);
  }
}
