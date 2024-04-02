import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {UserStartComponent} from "../user/user-start/user-start.component";
import {ActivatedRoute, Router} from "@angular/router";
import {AudioKnightsRadiantService} from "../../services/audio/audioKnightsRadiant/audio-knights-radiant.service";
import {WOKService} from "../../services/wallpaper/wok.service";
import {LoginService} from "../../services/auth/login.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  thunder = new Audio();

  constructor( private router : Router, private loginService: LoginService){
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.3;
    this.thunder.load();
  }

  setRadiantOrder(){
    this.router.navigate(['knightsRadiant/knight-radiant/radiant-order-form']);
  }
  logout()
  {
    this.loginService.logout();
    this.router.navigate(['knightsRadiant/home'])
  }
}
