import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioKnightsRadiantService {
  audio = new Audio();
  private isPlaying: boolean = false;

  constructor() {
    this.audio.src = 'assets/audio/music/knights-radiant-theme.mp3'; // Establece la ruta de tu archivo de audio
    this.audio.volume = 0.6;
    this.audio.loop = true;
  }

  playAudio(): void {
    this.audio.play();
    this.isPlaying = true;
  }

  pauseAudio(): void {
    this.audio.pause();
    this.isPlaying = false;
  }

  isAudioPlaying(): boolean {
    return this.isPlaying;
  }
}
