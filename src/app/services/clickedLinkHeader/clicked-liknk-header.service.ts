import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickedLiknkHeaderService {

  lastClickedLink: string | null = 'profile';

  constructor() { }
}
