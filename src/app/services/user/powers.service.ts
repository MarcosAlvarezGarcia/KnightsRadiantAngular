import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Surge} from "../../classes/surge/surge";
import {RadiantOrder} from "../../classes/radiant-order/radiant-order";

@Injectable({
  providedIn: 'root'
})
export class PowersService {
  // @ts-ignore
  private orderSubject = new BehaviorSubject<RadiantOrder>(null);
  order$ = this.orderSubject.asObservable();
  // @ts-ignore
  private surgeSubject = new BehaviorSubject<Surge>(null);
  surge$ = this.surgeSubject.asObservable();

  constructor() { }

  setOrder(order: RadiantOrder) {
    this.orderSubject.next(order);
  }
  setSurge(surge: Surge) {
    this.surgeSubject.next(surge);
  }
}
