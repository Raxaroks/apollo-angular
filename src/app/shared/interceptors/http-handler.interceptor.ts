import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from "rxjs"

export const httpHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe(
      catchError( (err: HttpErrorResponse) => handleError(err) )
    );
};

function handleError(error: HttpErrorResponse) {
  console.warn(error);
  return throwError( () => new Error(error.message) );
}
