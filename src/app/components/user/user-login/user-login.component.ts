import {Component, OnInit} from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioKnightsRadiantService } from '../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service';
import { WOKService } from '../../../services/wallpaper/wok.service';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../../services/auth/login.service";
import {LoginRequest} from "../../../services/auth/loginRequest";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  loginError:string="";
  loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
  })


  /*
  id : number = 5;
  email : string = '';
   password : string = '';
  repeatPassword : string = '';
  role : Role = Role.KNIGHT_RADIANT;
  surges : Surge [] = [];
  radiantOrder : RadiantOrder = new RadiantOrder(0, '', '', '', '', this.surges)
  knightRadiant : KnightRadiant = new KnightRadiant(0, Ideal.NO_IDEAL, 0, 0, this.radiantOrder);
  user:User = new User(5, '', '', Role.KNIGHT_RADIANT, this.knightRadiant);
  */


  thunder = new Audio();

  constructor(private userService : UserService, private router : Router, private activatedRoute : ActivatedRoute, private audioKnightsRadiantService: AudioKnightsRadiantService, private wokService: WOKService, private loginService: LoginService, private formBuilder: FormBuilder){
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

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  loginUser(){
    if(this.loginForm.valid){
      this.loginError="";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
            console.info(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completed");
          this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
          this.thunder.play();
          this.router.navigate(['knightsRadiant/users/details']);
        }
      })
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error entering data.");
    }
  }
}
