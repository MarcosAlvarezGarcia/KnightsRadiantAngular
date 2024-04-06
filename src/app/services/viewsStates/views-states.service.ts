import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsStatesService {
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

  constructor() { }

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

}
