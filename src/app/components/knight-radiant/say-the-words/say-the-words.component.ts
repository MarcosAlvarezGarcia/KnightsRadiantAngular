import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Ideal} from "../../../classes/ideal/ideal";
import {User} from "../../../services/auth/user";
import {forkJoin, Observable, switchMap, throwError} from "rxjs";
import {KnightRadiant} from "../../../classes/knight-radiant/knight-radiant";
import {AuthService} from "../../../services/auth/auth.service";
import {AudioKnightsRadiantService} from "../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service";

@Component({
  selector: 'app-say-the-words',
  templateUrl: './say-the-words.component.html',
  styleUrl: './say-the-words.component.css'
})
export class SayTheWordsComponent implements OnInit, OnDestroy{

  userDataString = localStorage.getItem('userData');
  userData: any;

  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;
  radiantId : number = 0;
  currentRadiantIdeal : number = 0;
  nextIdeal: boolean = false;

  ideal: string = "";

  userLoginOn:boolean=false;
  editMode:boolean=false;

  normalColor: string = '#866c46';
  orderColor: String = "";
  orderId: number = 0;

  stormFatherVoice = new Audio();
  backgroundTheme = new Audio();

  constructor(private userService: UserService, private krService: KnightRadiantService, private router: Router, private authService: AuthService, private music: AudioKnightsRadiantService) {
    this.stormFatherVoice.src = '/assets/audio/sounds/your-words-are-accepted.mp3';
    this.stormFatherVoice.volume = 1;
    this.stormFatherVoice.load();

    this.backgroundTheme.src = 'assets/audio/music/2-14-tarah-bonus-track.mp3';
    this.backgroundTheme.volume = 0.3;
    this.backgroundTheme.loop = true;
    //this.backgroundTheme.autoplay = true;

    document.documentElement.style.setProperty('--container-info-color', this.normalColor);
    document.documentElement.style.setProperty('--progress-color', this.normalColor);

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

    this.music.pauseAudio();
    this.backgroundTheme.play();

    this.userService.getUserByEmail(this.userData.email).subscribe({
      next: (userData) => {
        this.user=userData;
        if (this.user.knightRadiant && this.user.knightRadiant.radiantOrder) {
          this.orderColor = this.user.knightRadiant.radiantOrder.color;
          this.radiantId = this.user.knightRadiant.id;
          this.orderId = this.user.knightRadiant.radiantOrder.id;
          this.currentRadiantIdeal = this.user.knightRadiant.ideal;
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


  }

  ngOnDestroy() {
    this.backgroundTheme.pause();
  }

  sayNextIdeal() {
    this.userService.getUserByEmail(this.userData.email).pipe(
      switchMap(userData => {
        this.user = userData;
        this.radiantId = this.user.knightRadiant.id;
        return this.krService.setIdeal(this.radiantId);
      }),
      switchMap(() => {
        let nextIdealMethod: Observable<any>;

        switch (this.currentRadiantIdeal) {
          case 0:
            nextIdealMethod = this.krService.setFirstIdeal(this.radiantId, this.ideal);
            break;
          case 1:
            nextIdealMethod = this.krService.setSecondIdeal(this.radiantId, this.ideal);
            break;
          case 2:
            nextIdealMethod = this.krService.setThirdIdeal(this.radiantId, this.ideal);
            break;
          case 3:
            nextIdealMethod = this.krService.setFourthIdeal(this.radiantId, this.ideal);
            break;
          case 4:
            nextIdealMethod = this.krService.setFifthIdeal(this.radiantId, this.ideal);
            break;
          default:
            console.error('Valor de currentRadiantIdeal no válido');
            return throwError('Valor de currentRadiantIdeal no válido');
        }

        return nextIdealMethod;
      })
    ).subscribe(
      () => {
        console.log('Ambas operaciones completadas con éxito');
        this.stormFatherVoice.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
        this.stormFatherVoice.play();
        this.ideal = '';
      },
      (error) => {
        console.error('Error al realizar las operaciones:', error);
        // Manejar errores si es necesario
      }
    );
  }
}
