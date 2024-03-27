import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Surge } from '../../classes/surge/surge';

@Injectable({
  providedIn: 'root'
})
export class SurgeService {

  private zone : string = 'surges';
  private baseUrl : string = 'http://localhost:8080/knightsRadiant/' + this.zone;

  constructor(private http:HttpClient) { }

  getSurgeList():Observable<Surge []>{
    return this.http.get<Surge[]>(this.baseUrl);
  }

  getSurgeById(id : number):Observable<Surge>{
    return this.http.get<Surge>(this.baseUrl + "/id/" + id);
  }

  createSurge(surge : Surge):Observable<Surge>{
    return this.http.post<Surge>(this.baseUrl + "/create", surge);
  }

  updateSurge(id : number, surge : Surge):Observable<Surge>{
    return this.http.put<Surge>(this.baseUrl + "/update/" + id, surge);
  }

  deleteSurge(id : number):Observable<any>{
    return this.http.delete<Surge>(this.baseUrl + "/delete/" + id);
  }
}
