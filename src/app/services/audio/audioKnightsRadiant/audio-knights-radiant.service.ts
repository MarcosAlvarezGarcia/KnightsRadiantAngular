import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioKnightsRadiantService{
  audio = new Audio();
  private isPlaying: boolean = false;

  kaladinDisc: string[] = [
    'assets/audio/music/1-01-oathpact-abandoned.mp3',
    'assets/audio/music/1-02-the-assassin-in-white.mp3',
    'assets/audio/music/1-03-stormblessed.mp3',
    'assets/audio/music/1-04-honor-is-dead.mp3',
    'assets/audio/music/1-05-sylphrena.mp3',
    'assets/audio/music/1-06-the-shattered-plains.mp3',
    'assets/audio/music/1-07-bridge-four.mp3',
    'assets/audio/music/1-08-honor-chasm.mp3',
    'assets/audio/music/1-09-the-blackthorn.mp3',
    'assets/audio/music/1-10-alethi-codes-of-war.mp3',
    'assets/audio/music/1-11-the-kings-wit.mp3',
    'assets/audio/music/1-12-youre-in-my-spot.mp3',
    'assets/audio/music/1-13-chasm-kata.mp3',
    'assets/audio/music/1-14-unite-them.mp3',
    'assets/audio/music/1-15-bridge-four-shield.mp3',
    'assets/audio/music/1-16-highstorm.mp3',
    'assets/audio/music/2-01-rysn.mp3',
    'assets/audio/music/2-02-hearthstone-tiens-theme.mp3',
    'assets/audio/music/2-03-sas-nahn.mp3',
    'assets/audio/music/2-04-the-day-of-recreance.mp3',
    'assets/audio/music/2-05-wandersail.mp3',
    'assets/audio/music/2-06-three-glyphs-wind-beloved-protection.mp3',
    'assets/audio/music/2-07-rhythm-of-mourning.mp3',
    'assets/audio/music/2-08-16-seconds-pre-death.mp3',
    'assets/audio/music/2-09-tien.mp3',
    'assets/audio/music/2-10-the-tower.mp3',
    'assets/audio/music/2-11-thath-justice.mp3',
    'assets/audio/music/2-12-warrior.mp3',
    'assets/audio/music/2-13-shallans-lullaby-bonus-track.mp3',
    'assets/audio/music/2-14-tarah-bonus-track.mp3',
    'assets/audio/music/2-15-knights-radiant-theme.mp3',
  ];

  currentIndex: number = 30; // Empiezo desde la última canción del disco

  currentTime: number = 0; // Guardaré el tiempo de la canción actual


  constructor() {
    this.audio.volume = 0.6;
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    const savedIndex = localStorage.getItem('currentSongIndex');
    const savedTime = localStorage.getItem('currentTime');
    if (savedIndex !== null && savedTime !== null) {
      this.currentIndex = +savedIndex;
      this.currentTime = +savedTime;
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('currentSongIndex', this.currentIndex.toString());
    localStorage.setItem('currentTime', this.currentTime.toString());
  }

  playNextSong() {
    this.isPlaying = true;
    if (this.currentIndex >= this.kaladinDisc.length) {
      this.currentIndex = 0 // Vuelve al principio del disco al llegar al final
    }
    this.audio.src = this.kaladinDisc[this.currentIndex];
    this.audio.currentTime = this.currentTime;
    this.audio.load();
    this.audio.play();
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
      this.saveToLocalStorage()
    })
    this.audio.addEventListener('ended', () => {
      this.currentIndex++;
      this.currentTime = 0;
      this.playNextSong()
    })
  }



  playAudio(): void {
    this.audio.play();
    this.isPlaying = true;
  }

  pauseAudio(): void {
    this.audio.pause();
    this.isPlaying = false;
    this.saveToLocalStorage();
  }

  isAudioPlaying(): boolean {
    return this.isPlaying;
  }
}
