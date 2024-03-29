import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioKnightsRadiantService } from '../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service';
import { WOKService } from '../../../services/wallpaper/wok.service';

@Component({
  selector: 'app-user-start',
  templateUrl: './user-start.component.html',
  styleUrl: './user-start.component.css'
})
export class UserStartComponent implements OnInit{

  thunder = new Audio();

constructor(private router : Router, private audioKnightsRadiantService: AudioKnightsRadiantService, private wokService: WOKService){
  this.thunder.src = '/assets/audio/sounds/thunder.mp3';
  this.thunder.volume = 0.3;
  this.thunder.load();
 }

ngOnInit(): void {
  this.audioKnightsRadiantService.playAudio();
}

register(){
  this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
  this.thunder.play();
  this.router.navigate(['knightsRadiant/user/register']);
}

logIn(){
  this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
  this.thunder.play();
  this.router.navigate(['knightsRadiant/user/login']);
}
}
