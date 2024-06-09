import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {KnightRadiantService} from "../../services/knightRadiant/knight-radiant.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {AudioKnightsRadiantService} from "../../services/audio/audioKnightsRadiant/audio-knights-radiant.service";
import {User} from "../../services/auth/user";
import {KnightRadiant} from "../../classes/knight-radiant/knight-radiant";
import {Observable} from "rxjs";
import {Surge} from "../../classes/surge/surge";

@Component({
  selector: 'app-herlad',
  templateUrl: './herlad.component.html',
  styleUrl: './herlad.component.css'
})
export class HerladComponent implements OnInit{
  userDataString = localStorage.getItem('userData');
  userData: any;

  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;
  radiantId : number = 0;
  orderName: string = "";
  currentRadiantIdeal : number = 0;
  missionsCompleted : number = 0;
  nextIdeal: boolean = false;

  ideal: string = "";

  userLoginOn:boolean=false;
  editMode:boolean=false;

  normalColor: string = '#866c46';
  orderColor: String = "";
  orderId: number = 0;

  stormFatherVoice = new Audio();
  backgroundTheme = new Audio();

  title : String = 'SAY THE WORDS';
  placeholderText : String = 'Say the Words, Radiant';
  inputDisabled: boolean = true;

  users : User [] = [];


  constructor(private userService: UserService, private krService: KnightRadiantService, private router: Router, private authService: AuthService, private music: AudioKnightsRadiantService) {


  }



  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['knightsRadiant/home']);
    }
    if (this.userDataString) {
      this.userData = JSON.parse(this.userDataString);
    } else {
      console.log('No se encontraron datos de usuario en el localStorage.');
    }


    this.userService.getUserByEmail(this.userData.email).subscribe({
      next: (userData) => {
        this.user=userData;
        if (this.user.knightRadiant && this.user.knightRadiant.radiantOrder) {
          this.orderColor = this.user.knightRadiant.radiantOrder.color;
          this.radiantId = this.user.knightRadiant.id;
          this.orderId = this.user.knightRadiant.radiantOrder.id;
          this.orderName = this.user.knightRadiant.radiantOrder.name;
          this.currentRadiantIdeal = this.user.knightRadiant.ideal;
          this.missionsCompleted = this.user.knightRadiant.missionsCompleted;

          //this.updateInterface();
        } else {
          this.orderColor = ''; // Otra acción por defecto si es necesario
        }              let userId = userData.id.toString();
        //this.registerForm.controls.knightRadiant.setValue(userData.knightRadiant.radiantOrder?.name);
      },
      error: (errorData) => {
        this.errorMessage=errorData
      },
      complete: () => {
        console.info("User Data ok");
      }
    })

    this.loadUsersList();

  }
  loadUsersList() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
        console.log(data);
      }
    );
  }

  deleteUser(email: string): void {
    this.userService.deleteUser(email).subscribe({
      next: () => {
        console.log('Usuario eliminado correctamente.');
        // Elimina el usuario de la lista local
        this.users = this.users.filter(user => user.email !== email);
      },
      error: (error) => {
        console.error('Error al eliminar usuario:', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['knightsRadiant/home'])
  }

}
