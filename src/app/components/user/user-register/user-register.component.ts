import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RadiantOrder} from "../../../classes/radiant-order/radiant-order";
import {KnightRadiant} from "../../../classes/knight-radiant/knight-radiant";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";
import {AuthService} from "../../../services/auth/auth.service";
import {ViewsStatesService} from "../../../services/viewsStates/views-states.service";

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

    knightRadiantId : number = 0;

    knightRadiant:KnightRadiant= new KnightRadiant(0, 0, '', '', '', '', '',0, 0, null!);
    id : number = 0;
    ideal : number = 0;
    firstIdeal : string = "";
    secondIdeal : string = "";
    thirdIdeal : string = "";
    fourthIdeal : string = "";
    fifthIdeal : string = "";
    currentMissionId : number = null!;
    missionsCompleted : number = 0;
    radiantOrder: RadiantOrder = null!;

    thunder = new Audio();

  constructor(private userService : UserService,
              private knightRadiantService: KnightRadiantService,
              private authService: AuthService,
              public viewStatesService: ViewsStatesService,
              private router : Router,
              private activatedRoute : ActivatedRoute,
  ){
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.3;
    this.thunder.load();
   }

  ngOnInit(): void {
    // Recupera los datos del usuario del localStorage
    const userData = this.authService.getUserData();
    console.log(userData);
    // Comprueba si los datos del usuario existen antes de obtener el knightradiant_id
    if (userData) {
      //this.knightRadiantId = userData.
    }
  }

  registerUser(){
    this.userService.registerUser(this.name, this.email, this.password, this.repeatPassword).subscribe(
        (response) => {
            // Registro exitoso
            // Guardo los datos del usuario y su token
            this.authService.storeUserData(response.info, response.token);

            this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
            this.thunder.play();

            // Cambio las ventanas
                                      //this.userStart.viewLogin = true;
            this.viewStatesService.setViewRadiantForm(true);
            this.viewStatesService.setViewQuiz(true);
            this.viewStatesService.setViewRegister(false);
            //this.router.navigate(['knightsRadiant/user/login']);
        },
        error => {
            console.error('Error al registrar usuario:', error);
            // Manejar el error, mostrar un mensaje de error al usuario, etc.
        }
    );
  }

    newKnightRadiant(){
        let knightRadiant = new KnightRadiant(this.id, this.ideal, this.firstIdeal, this.secondIdeal, this.thirdIdeal, this.fourthIdeal, this.fifthIdeal, this.currentMissionId, this.missionsCompleted, this.radiantOrder);
        console.log(knightRadiant);
        this.knightRadiantService.createKnightRadiant(knightRadiant).subscribe(
            res => {
                console.log(res);
                this.registerUser();
            }
        )
    }

  back(){
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.viewStatesService.setViewStart(true);
    this.viewStatesService.setViewRegister(false);
    //this.router.navigate(['knightsRadiant/user/start']);
  }

}
