import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtengo el token del servicio de autenticación
    const token = this.authService.getToken();
      if (token){
        // Clonar la solicitud y agregar el encabezado con el token de portador
        req = req.clone({
          setHeaders: {
            //'Content-Type': 'application/json;charset=urf-8',
            //'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });
    }
    // Continuar con la solicitud modificada
    return next.handle(req);
  }
}
