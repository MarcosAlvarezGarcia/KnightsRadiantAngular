import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsStatesService {
  // http://localhost:4200/knightsRadiant/user/start
  public viewStart = new BehaviorSubject<boolean>(true);
  viewStart$ = this.viewStart.asObservable();
  public viewLogin = new BehaviorSubject<boolean>(false);
  viewLogin$ = this.viewLogin.asObservable();
  public viewRegister = new BehaviorSubject<boolean>(false);
  viewRegister$ = this.viewRegister.asObservable();
  public viewRadiantForm = new BehaviorSubject<boolean>(false);
  viewRadiantForm$ = this.viewRadiantForm.asObservable();
  public viewQuiz = new BehaviorSubject<boolean>(false);
  viewQuiz$ = this.viewQuiz.asObservable();
  public viewOrder = new BehaviorSubject<boolean>(false);
  viewOrder$ = this.viewOrder.asObservable();

  public pageStart = new BehaviorSubject<boolean>(true);
  pageStart$ = this.pageStart.asObservable();


  // http://localhost:4200/knightsRadiant/user/details
  public viewProfile = new BehaviorSubject<boolean>(true);
  viewProfile$ = this.viewProfile.asObservable();
  public viewOrderDetails = new BehaviorSubject<boolean>(false);
  viewOrderDetails$ = this.viewOrderDetails.asObservable();
  public viewSurgeDetails = new BehaviorSubject<boolean>(false);
  viewSurgeDetails$ = this.viewSurgeDetails.asObservable();
  public viewShardbladeDetails = new BehaviorSubject<boolean>(false);
  viewShardbladeDetails$ = this.viewShardbladeDetails.asObservable();
  public viewShardplateDetails = new BehaviorSubject<boolean>(false);
  viewShardplateDetails$ = this.viewShardplateDetails.asObservable();

  constructor() { }

  // http://localhost:4200/knightsRadiant/user/start

  setViewStart(value: boolean) {
    this.viewStart.next(value);
  }

  setViewLogin(value: boolean) {
    this.viewLogin.next(value);
  }

  setViewRegister(value: boolean) {
    this.viewRegister.next(value);
  }

  setViewRadiantForm(value: boolean) {
    this.viewRadiantForm.next(value);
  }

  setViewQuiz(value: boolean) {
    this.viewQuiz.next(value);
  }

  setViewOrder(value: boolean) {
    this.viewOrder.next(value);
  }


  setPageStart(value: boolean) {
    this.pageStart.next(value);
  }



  // http://localhost:4200/knightsRadiant/user/details

  setViewProfile(value: boolean) {
    this.viewProfile.next(value);
  }

  setViewOrderDetails(value: boolean) {
    this.viewOrderDetails.next(value);
  }

  setViewSurgeDetails(value: boolean) {
    this.viewSurgeDetails.next(value);
  }

  setViewShardbladeDetails(value: boolean) {
    this.viewShardbladeDetails.next(value);
  }

  setViewShardplateDetails(value: boolean) {
    this.viewShardplateDetails.next(value);
  }

}
