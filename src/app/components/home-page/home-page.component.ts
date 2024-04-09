import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { Router } from '@angular/router';
import {isPlatformBrowser} from "@angular/common";
import {ViewsStatesService} from "../../services/viewsStates/views-states.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  thunder = isPlatformBrowser(this.platformId) ? new Audio('/assets/audio/sounds/thunder.mp3') : null ;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, public viewsStatesService: ViewsStatesService, private authService: AuthService) {
    if (this.thunder) {
      this.thunder.volume = 0.3;
      this.thunder.load();
    }
  }

  ngOnInit(): void {

  }

  enter(){
    if (this.thunder) {
      this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
      this.thunder.play();
    }
    this.viewsStatesService.setViewRadiantForm(false);
    this.viewsStatesService.setViewStart(true);
    this.viewsStatesService.setPageStart(true);
    //if (this.authService.isAuthenticated()) {
    //  this.router.navigate(['knightsRadiant/user/details']);
    //}
    //else {
      this.router.navigate(['knightsRadiant/user/start']);
    //}
  }

}
