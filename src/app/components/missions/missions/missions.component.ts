import {Component, HostListener} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AudioKnightsRadiantService} from "../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service";
import {AuthService} from "../../../services/auth/auth.service";
import {RadiantOrderService} from "../../../services/radiant-order/radiant-order.service";
import {SurgeService} from "../../../services/surge/surge.service";
import {PowersService} from "../../../services/user/powers.service";
import {ViewsStatesService} from "../../../services/viewsStates/views-states.service";

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css'
})
export class MissionsComponent {

  constructor(private audioKnightsRadiantService: AudioKnightsRadiantService) {}

  @HostListener('document:click', ['$event'])
  @HostListener('document:keydown', ['$event'])
  handleUserInteraction(event: Event) {
    // Reproduce la música cuando el usuario interactúa con la página
    if (!this.audioKnightsRadiantService.isAudioPlaying()) {
      this.audioKnightsRadiantService.playNextSong();
      //this.wokvideo.playVideo();
    }
  }
}
