import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError, catchError, tap, map} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoginRequest} from "./loginRequest";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private zone : string = '/users';
  private baseUrl : string = 'http://localhost:8080/knightsRadiant' + this.zone;

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor(private http: HttpClient) {
    this.currentUserLoginOn= new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData= new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
  }

  login(credentials:LoginRequest):Observable<any>{
    return this.http.post<any>(this.baseUrl + "/login", credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token", userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=> userData.token),
      catchError(this.handleError)
      );
  }

  logout():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producido un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

}
