import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KnightRadiant} from "../../classes/knight-radiant/knight-radiant";
import {User} from "../auth/user";

@Injectable({
  providedIn: 'root'
})
export class KnightRadiantService {

  private zone: string = 'knightRadiant';
  private baseUrl: string = 'http://localhost:8080/knightsRadiant/' + this.zone;

  private urlSetOrder: string = this.baseUrl + "/setRadiantOrder";

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

  setRadiantOrder(id: number, radiantOrderId: number):Observable<KnightRadiant>{
    const url = `${this.urlSetOrder}/${id}`;
    return this.http.patch<KnightRadiant>(url, radiantOrderId);
    //return this.http.patch<KnightRadiant>(this.baseUrl + "/setRadiantOrder/" + id + "/", radiantOrderId)
  }

  deleteKnightRadiant(id: number): Observable<any> {
    return this.http.delete<KnightRadiant>(this.baseUrl + "/delete/" + id);
  }



}
