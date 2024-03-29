import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = '';
        if (token) {
            request = request.clone({
                headers: new HttpHeaders({
                    Authorization: `Bearer ${token}`
                })
            });
            return next.handle(request);
        } else {
            return next.handle(request);
        }
    }
}
