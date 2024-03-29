import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioKnightsRadiantService } from '../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service';
import { WOKService } from '../../../services/wallpaper/wok.service';
import {RadiantOrder} from "../../../classes/radiant-order/radiant-order";
import {Ideal} from "../../../classes/ideal/ideal";
import {KnightRadiant} from "../../../classes/knight-radiant/knight-radiant";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit{
    name : string = '';
    email : string = '';
    password : string = '';
    repeatPassword : string = '';

    knightRadiant:KnightRadiant= new KnightRadiant(0, Ideal.NO_IDEAL, 0, 0, null!);
    id : number = 0;
    currentMissionId : number = null!;
    missionsCompleted : number = 0;
    ideal : Ideal = Ideal.NO_IDEAL;
    radiantOrder: RadiantOrder = null!;

  thunder = new Audio();

  constructor(private userService : UserService, private knightRadiantService: KnightRadiantService, private router : Router, private activatedRoute : ActivatedRoute, private audioKnightsRadiantService: AudioKnightsRadiantService, private wokService: WOKService){
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.3;
    this.thunder.load();
   }

  ngOnInit(): void {
  }

  back(){
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.router.navigate(['knightsRadiant/user/start']);
  }


  registerUser(){
    this.userService.registerUser(this.name, this.email, this.password, this.repeatPassword).subscribe(
        () => {
            // Registro exitoso, redireccionar a la página de inicio de sesión o a otra página
            this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
            this.thunder.play();
            this.router.navigate(['knightsRadiant/user/login']);
        },
        error => {
            console.error('Error al registrar usuario:', error);
            // Manejar el error, mostrar un mensaje de error al usuario, etc.
        }
    );
  }

    newKnightRadiant(){
        let knightRadiant = new KnightRadiant(this.id, this.ideal, this.currentMissionId, this.missionsCompleted, this.radiantOrder);
        console.log(knightRadiant);
        this.knightRadiantService.createKnightRadiant(knightRadiant).subscribe(
            res => {
                console.log(res);
                this.registerUser();
            }
        )
    }

}
