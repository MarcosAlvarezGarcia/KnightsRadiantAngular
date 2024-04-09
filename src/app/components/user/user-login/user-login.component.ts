import {Component, OnInit} from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginRequest} from "../../../services/auth/loginRequest";
import {User} from "../../../services/auth/user";
import {UserStartComponent} from "../user-start/user-start.component";
import {ViewsStatesService} from "../../../services/viewsStates/views-states.service";
import {AuthService} from "../../../services/auth/auth.service";

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

    currentUserEmail : string = "";
    user?: User; // Almacena la información del usuario
    userData?:User;


    thunder = new Audio();

  constructor(private userService: UserService, private authService: AuthService, public viewStatesService: ViewsStatesService, private router : Router, private formBuilder: FormBuilder){
  this.thunder.src = '/assets/audio/sounds/thunder.mp3';
  this.thunder.volume = 0.3;
  this.thunder.load();
 }

  ngOnInit(): void {
  }

  back(){
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.viewStatesService.setViewLogin(false);
    this.viewStatesService.setViewStart(true);
    //this.router.navigate(['knightsRadiant/user/start']);
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
        this.userService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (response) => {
          // Login exitoso
          // Guardo los datos del usuario y su token
          this.authService.storeUserData(response.info, response.token);
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
