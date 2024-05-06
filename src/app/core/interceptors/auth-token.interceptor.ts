import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'; // This would normally be retrieved from the API as part of the log-in process.
    const authReq = request.clone({
      headers: request.headers
        .set('X-Api-Key', authToken)

    });
    return next.handle(authReq);
  }
}
