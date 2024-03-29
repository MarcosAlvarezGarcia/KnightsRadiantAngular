import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {User} from "../auth/user";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private zone : string = '/users';
  private baseUrl : string = 'http://localhost:8080/knightsRadiant' + this.zone;

  constructor(private http:HttpClient) { }

  getUser(id : number):Observable<User>{
    return this.http.get<User>(this.baseUrl + "/id/" + id).pipe(
      catchError(this.handleError)
    )
  }

  getUserByEmail(email: string):Observable<User>{
    return this.http.get<User>(this.baseUrl + "/email/" + email).pipe(
        catchError(this.handleError)
    )
  }

  updateUser(userRquest:User):Observable<any>
  {
    return this.http.put(this.baseUrl + "/update/", userRquest).pipe(
      catchError(this.handleError)
    )
  }

  registerUser(name: string, email: string, password: string, repeatPassword: string):Observable<any>{
    return this.http.post<User>(this.baseUrl + "/register", {name, email, password, repeatPassword });
  }


  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Se ha producido un error', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}