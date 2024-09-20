import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private logger: LoggerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Server-side error: Status ${error.status}\nMessage: ${error.message}`;
        }

        // Log the error using the logger service
        this.logger.error(errorMessage);

        // Optionally return a user-friendly error message to the application
        return throwError(() => new Error('Something went wrong; please try again later.'));
      })
    );
  }
}
