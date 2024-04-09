import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {ClickedLiknkHeaderService} from "../../services/clickedLinkHeader/clicked-liknk-header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  lastClickedLink: string | null = null;

  thunder = new Audio();

  constructor( private router : Router, private authService: AuthService, public lastClickedService: ClickedLiknkHeaderService){
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.1;
    this.thunder.load();
  }

  setRadiantOrder(){
    this.router.navigate(['knightsRadiant/knight-radiant/radiant-order-form']);
  }

  sayTheWords()
  {
    if (this.lastClickedService.lastClickedLink != 'sayTheWords') {
      this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
      this.thunder.play();
      this.router.navigate(['knightsRadiant/radiant/say-the-words'])
    }
    this.lastClickedService.lastClickedLink = 'sayTheWords';
  }

  missions()
  {
    if (this.lastClickedService.lastClickedLink != 'missions') {
      this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
      this.thunder.play();
      this.router.navigate(['knightsRadiant/radiant/missions'])
    }
    this.lastClickedService.lastClickedLink = 'missions';
  }

  profile()
  {
    if (this.lastClickedService.lastClickedLink != 'profile') {
      this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
      this.thunder.play();
      this.router.navigate(['knightsRadiant/user/details'])
    }
    this.lastClickedService.lastClickedLink = 'profile';
  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['knightsRadiant/home'])
  }
}
