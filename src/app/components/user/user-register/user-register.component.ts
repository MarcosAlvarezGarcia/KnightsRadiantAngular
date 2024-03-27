import { Component, OnInit } from '@angular/core';
import { Role } from '../../../classes/role/role';
import { User } from '../../../classes/user/user';
import { UserService } from '../../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioKnightsRadiantService } from '../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service';
import { WOKService } from '../../../services/wallpaper/wok.service';
import {Surge} from "../../../classes/surge/surge";
import {RadiantOrder} from "../../../classes/radiant-order/radiant-order";
import {KnightRadiant} from "../../../classes/knight-radiant/knight-radiant";
import {Ideal} from "../../../classes/ideal/ideal";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit{
  id : number = 5;
  email : string = '';
  password : string = '';
  repeatPassword : string = '';
  role : Role = Role.KNIGHT_RADIANT;
  surges : Surge [] = [];
  radiantOrder : RadiantOrder = new RadiantOrder(0, '', '', '', '', this.surges)
  knightRadiant : KnightRadiant = new KnightRadiant(0, Ideal.NO_IDEAL, 0, 0, this.radiantOrder);
  user:User = new User(5, '', '', Role.KNIGHT_RADIANT, this.knightRadiant);

  thunder = new Audio();

  constructor(private userService : UserService, private router : Router, private activatedRoute : ActivatedRoute, private audioKnightsRadiantService: AudioKnightsRadiantService, private wokService: WOKService){
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.3;
    this.thunder.load();
   }

  ngOnInit(): void {
  }

  back(){
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.router.navigate(['knightsRadiant/users/start']);
  }

  registerUser(){
    let user = new User(this.id, this.email, this.password, this.role, this.knightRadiant);
    console.log(user);
    this.userService.registerUser(user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['knightsRadiant/surges']);
      }
    )
  }
  upload():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.userService.getUserById(id).subscribe(
            es=>this.user=es
          )
        }
      }
    )
  }
}
