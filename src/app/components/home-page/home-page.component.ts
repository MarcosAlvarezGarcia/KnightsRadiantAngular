import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { Router } from '@angular/router';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  thunder = isPlatformBrowser(this.platformId) ? new Audio('/assets/audio/sounds/thunder.mp3') : null ;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
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
    this.router.navigate(['knightsRadiant/user/start']);
  }

}
