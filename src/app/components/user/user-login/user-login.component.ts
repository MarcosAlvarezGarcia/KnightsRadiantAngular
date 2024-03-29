import {Component, OnInit} from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioKnightsRadiantService } from '../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service';
import { WOKService } from '../../../services/wallpaper/wok.service';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../../services/auth/login.service";
import {LoginRequest} from "../../../services/auth/loginRequest";
import {User} from "../../../services/auth/user";

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

    stringEmail : string = "marcos.alv.garcia@gmail.com";
    currentUser: any = {}; // Almacena la información del usuario
    user?:User;


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
    this.router.navigate(['knightsRadiant/user/start']);
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

          this.router.navigate(['knightsRadiant/user/details']);
        }
      })
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error entering data.");
    }
  }
}
