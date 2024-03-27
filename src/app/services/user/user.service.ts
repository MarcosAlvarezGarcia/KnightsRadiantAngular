import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { User } from '../../classes/user/user';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private zone : string = '/users';
  private baseUrl : string = 'http://localhost:8080/knightsRadiant' + this.zone;

  constructor(private http:HttpClient) { }

  getUserList():Observable<User []>{
    return this.http.get<[]>(this.baseUrl);
  }

  getUserById(id : number):Observable<User>{
    return this.http.get<User>(this.baseUrl + "/id/" + id).pipe(
      catchError(this.handleError)
    )
  }

  createUser(User : User):Observable<User>{
    return this.http.post<User>(this.baseUrl + "/create", User);
  }

  registerUser(User : User):Observable<User>{
    return this.http.post<User>(this.baseUrl + "/register", User);
  }

  loginUser(userName: string, userPassword: string){
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(userName+"+"+userPassword)})
    return this.http.post<User>(this.baseUrl + "/login", {headers,responseType:'text' as 'json'});
  }

  updateUser(id : number, User : User):Observable<User>{
    return this.http.put<User>(this.baseUrl + "/update/" + id, User);
  }

  deleteUser(id : number):Observable<any>{
    return this.http.delete<User>(this.baseUrl + "/delete/" + id);
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
