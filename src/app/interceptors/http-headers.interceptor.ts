import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
          setHeaders: {
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            'x-rapidapi-key':
              'e251ae28c0mshb811a1ebab26ea9p1d7e1ajsnf4aa243b0a4e',
            }
            // setParams: {
            //     key:
            // }
        });
        return next.handle(req);
    }
}