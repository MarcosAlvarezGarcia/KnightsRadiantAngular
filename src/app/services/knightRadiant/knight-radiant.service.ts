import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KnightRadiant} from "../../classes/knight-radiant/knight-radiant";

@Injectable({
  providedIn: 'root'
})
export class KnightRadiantService {

  private zone: string = 'knightRadiant';
  private baseUrl: string = 'http://localhost:8080/knightsRadiant/' + this.zone;

  constructor(private http: HttpClient) {
  }

  getKnightRadiantList(): Observable<KnightRadiant []> {
    return this.http.get<KnightRadiant[]>(this.baseUrl);
  }

  getKnightRadiantById(id: number): Observable<KnightRadiant> {
    return this.http.get<KnightRadiant>(this.baseUrl + "/id/" + id);
  }

  createKnightRadiant(knightRadiant: KnightRadiant): Observable<KnightRadiant> {
    return this.http.post<KnightRadiant>(this.baseUrl + "/create", knightRadiant);
  }

  updateKnightRadiant(id: number, knightRadiant: KnightRadiant): Observable<KnightRadiant> {
    return this.http.put<KnightRadiant>(this.baseUrl + "/update/" + id, knightRadiant);
  }

  deleteKnightRadiant(id: number): Observable<any> {
    return this.http.delete<KnightRadiant>(this.baseUrl + "/delete/" + id);
  }
}
