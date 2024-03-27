import { Injectable } from '@angular/core';
import { RadiantOrder } from '../../classes/radiant-order/radiant-order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadiantOrderService {

  private zone : string = '/radiantOrders';
  private baseUrl : string = 'http://localhost:8080/knightsRadiant' + this.zone;

  constructor(private http:HttpClient) { }
  
  getRadiantOrderList():Observable<RadiantOrder []>{
    return this.http.get<RadiantOrder[]>(this.baseUrl);
  }

  getRadiantOrderById(id : number):Observable<RadiantOrder>{
    return this.http.get<RadiantOrder>(this.baseUrl + "/id/" + id);
  }

  createRadiantOrder(RadiantOrder : RadiantOrder):Observable<RadiantOrder>{
    return this.http.post<RadiantOrder>(this.baseUrl + "/create", RadiantOrder);
  }

  updateRadiantOrder(id : number, RadiantOrder : RadiantOrder):Observable<RadiantOrder>{
    return this.http.put<RadiantOrder>(this.baseUrl + "/update/" + id, RadiantOrder);
  }

  deleteRadiantOrder(id : number):Observable<any>{
    return this.http.delete<RadiantOrder>(this.baseUrl + "/delete/" + id);
  }
}
