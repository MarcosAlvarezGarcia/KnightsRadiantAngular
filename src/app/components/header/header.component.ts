import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  thunder = new Audio();

  constructor( private router : Router, private authService: AuthService){
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.1;
    this.thunder.load();
  }

  setRadiantOrder(){
    this.router.navigate(['knightsRadiant/knight-radiant/radiant-order-form']);
  }

  sayTheWords()
  {
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.router.navigate(['knightsRadiant/radiant/say-the-words'])
  }

  missions()
  {
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.router.navigate(['knightsRadiant/radiant/missions'])
  }

  profile()
  {
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.router.navigate(['knightsRadiant/user/details'])
  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['knightsRadiant/home'])
  }
}
