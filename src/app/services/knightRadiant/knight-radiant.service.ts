import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {KnightRadiant} from "../../classes/knight-radiant/knight-radiant";
import {User} from "../auth/user";
import {Ideal} from "../../classes/ideal/ideal";

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

  setRadiantOrder(id: number, radiantOrderId: number): Observable<KnightRadiant> {
      const url = `${this.baseUrl}/setRadiantOrder/${id}?radiantOrderId=${radiantOrderId}`;
      return this.http.patch<KnightRadiant>(url, {});
  }

  setIdeal(id: number): Observable<KnightRadiant> {
    const url = `${this.baseUrl}/setIdeal/${id}`;
    return this.http.patch<KnightRadiant>(url, {});
  }

  setFirstIdeal(id: number, firstIdeal: string): Observable<KnightRadiant> {
    const url = `${this.baseUrl}/setFirstIdeal/${id}?firstIdeal=${firstIdeal}`;
    return this.http.patch<KnightRadiant>(url, {});
  }

  setSecondIdeal(id: number, secondIdeal: string): Observable<KnightRadiant> {
    const url = `${this.baseUrl}/setSecondIdeal/${id}?secondIdeal=${secondIdeal}`;
    return this.http.patch<KnightRadiant>(url, {});
  }

  setThirdIdeal(id: number, thirdIdeal: string): Observable<KnightRadiant> {
    const url = `${this.baseUrl}/setThirdIdeal/${id}?thirdIdeal=${thirdIdeal}`;
    return this.http.patch<KnightRadiant>(url, {});
  }

  setFourthIdeal(id: number, fourthIdeal: string): Observable<KnightRadiant> {
    const url = `${this.baseUrl}/setFourthIdeal/${id}?fourthIdeal=${fourthIdeal}`;
    return this.http.patch<KnightRadiant>(url, {});
  }

  setFifthIdeal(id: number, fifthIdeal: string): Observable<KnightRadiant> {
    const url = `${this.baseUrl}/setFifthIdeal/${id}?fifthIdeal=${fifthIdeal}`;
    return this.http.patch<KnightRadiant>(url, {});
  }

  setMissionsCompleted(id: number): Observable<KnightRadiant> {
      const url = `${this.baseUrl}/setMissionsCompleted/${id}`;
      return this.http.patch<KnightRadiant>(url, {});
  }

  deleteKnightRadiant(id: number): Observable<any> {
    return this.http.delete<KnightRadiant>(this.baseUrl + "/delete/" + id);
  }



}
