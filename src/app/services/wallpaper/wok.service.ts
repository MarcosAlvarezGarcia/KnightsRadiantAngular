import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WOKService {
  isPlaying: boolean = false;
  currentTime: number = 0; // Almacena el tiempo actual del video

  play() {
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }
}
