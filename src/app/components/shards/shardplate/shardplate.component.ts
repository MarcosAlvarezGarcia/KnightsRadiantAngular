import { Component } from '@angular/core';
import {ViewsStatesService} from "../../../services/viewsStates/views-states.service";

@Component({
  selector: 'app-shardplate',
  templateUrl: './shardplate.component.html',
  styleUrl: './shardplate.component.css'
})
export class ShardplateComponent {

  thunder = new Audio();

  constructor(public viewsStatesService: ViewsStatesService) {
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.3;
    this.thunder.load();
  }

  back() {
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.viewsStatesService.setViewShardbladeDetails(false);
    this.viewsStatesService.setViewShardplateDetails(false);
    this.viewsStatesService.setViewOrderDetails(false);
    this.viewsStatesService.setViewSurgeDetails(false);
    this.viewsStatesService.setViewShardbladeDetails(false);
    this.viewsStatesService.setViewProfile(true);
  }
}
