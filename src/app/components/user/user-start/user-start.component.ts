import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioKnightsRadiantService } from '../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service';
import { WOKService } from '../../../services/wallpaper/wok.service';
import {ViewsStatesService} from "../../../services/viewsStates/views-states.service";

@Component({
  selector: 'app-user-start',
  templateUrl: './user-start.component.html',
  styleUrl: './user-start.component.css'
})
export class UserStartComponent implements OnInit{

  thunder = new Audio();

constructor(private router : Router, private audioKnightsRadiantService: AudioKnightsRadiantService, public viewStatesService: ViewsStatesService){
  this.thunder.src = '/assets/audio/sounds/thunder.mp3';
  this.thunder.volume = 0.3;
  this.thunder.load();
 }

ngOnInit(): void {
  this.audioKnightsRadiantService.playNextSong();
}

register(){
  this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
  this.thunder.play();
  this.viewStatesService.setViewStart(false);
  this.viewStatesService.setViewRegister(true);
  //this.router.navigate(['knightsRadiant/user/register']);
}

logIn(){
  this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
  this.thunder.play();
  this.viewStatesService.setViewLogin(true);
  this.viewStatesService.setViewStart(false);
  //this.router.navigate(['knightsRadiant/user/login']);
}
}
