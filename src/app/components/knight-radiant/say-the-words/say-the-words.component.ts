import {Component} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";
import {FormBuilder} from "@angular/forms";
import {LoginService} from "../../../services/auth/login.service";
import {Router} from "@angular/router";
import {Ideal} from "../../../classes/ideal/ideal";
import {User} from "../../../services/auth/user";
import {forkJoin, Observable, switchMap} from "rxjs";
import {KnightRadiant} from "../../../classes/knight-radiant/knight-radiant";

@Component({
  selector: 'app-say-the-words',
  templateUrl: './say-the-words.component.html',
  styleUrl: './say-the-words.component.css'
})
export class SayTheWordsComponent {

  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;
  radiantId : number = 0;
  currentRadiantIdeal : number = 0;
  nextRadiantIdeal : number = 1;
  nextIdeal: boolean = false;

  ideal: string = "";

  userLoginOn:boolean=false;
  editMode:boolean=false;

  normalColor: string = '#866c46';
  orderColor: String = "";
  orderId: number = 0;

  stormFatherVoice = new Audio();


  constructor(private userService: UserService, private krService: KnightRadiantService, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {

    this.userService.getUserByEmail(this.loginService.currentUserEmail).subscribe({
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

    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn)=> {
        this.userLoginOn=userLoginOn;
      }
    })

    this.stormFatherVoice.src = '/assets/audio/sounds/your-words-are-accepted.mp3';
    this.stormFatherVoice.volume = 1;
    this.stormFatherVoice.load();

    document.documentElement.style.setProperty('--container-info-color', this.normalColor);
    document.documentElement.style.setProperty('--progress-color', this.normalColor);

  }



    sayNextIdeal() {
        this.userService.getUserByEmail(this.loginService.currentUserEmail).pipe(
            switchMap(userData => {
                this.user = userData;
                this.radiantId = this.user.knightRadiant.id;
                return this.krService.setIdeal(this.radiantId);
            }),
            switchMap(() => {
                return this.krService.setFirstIdeal(this.radiantId, this.ideal);
            })
        ).subscribe(
            () => {
                console.log('Ambas operaciones completadas con éxito');
                // Realizar acciones adicionales después de que ambas operaciones se completen
            },
            (error) => {
                console.error('Error al realizar las operaciones:', error);
                // Manejar errores si es necesario
            }
        );
    }

  setIdeal(){
    this.krService.setIdeal(8).subscribe(
      response => {
        console.log("Next Ideal:", response);
      },
        error => {
        console.error('Error al subir de ideal', error);
        }
    )
  }

  setFirstIdeal(firstIdeal: string) {
    this.krService.setFirstIdeal(8, firstIdeal).subscribe(
        response => {
          console.log('Accepted Ideal:', response);
          //this.router.navigate(['knightsRadiant/user/details']);
        },
        error => {
          console.error('Error el poner el ideal:', error);
        }
    );
  }
  setSecondIdeal(secondIdeal: string) {
    this.krService.setSecondIdeal(this.radiantId, secondIdeal).subscribe(
        response => {
          console.log('Accepted Ideal:', response);
          //this.router.navigate(['knightsRadiant/user/details']);
        },
        error => {
          console.error('Error el poner el ideal:', error);
        }
    );
  }
  setThirdIdeal(thirdIdeal: string) {
    this.krService.setThirdIdeal(this.radiantId, thirdIdeal).subscribe(
        response => {
          console.log('Accepted Ideal:', response);
          //this.router.navigate(['knightsRadiant/user/details']);
        },
        error => {
          console.error('Error el poner el ideal:', error);
        }
    );
  }
  setFourthIdeal(fourthIdeal: string) {
    this.krService.setFourthIdeal(this.radiantId, fourthIdeal).subscribe(
        response => {
          console.log('Accepted Ideal:', response);
          //this.router.navigate(['knightsRadiant/user/details']);
        },
        error => {
          console.error('Error el poner el ideal:', error);
        }
    );
  }
  setFifthIdeal(fifthIdeal: string) {
    this.krService.setFifthIdeal(this.radiantId, fifthIdeal).subscribe(
        response => {
          console.log('Accepted Ideal:', response);
          //this.router.navigate(['knightsRadiant/user/details']);
        },
        error => {
          console.error('Error el poner el ideal:', error);
        }
    );
  }

    protected readonly Ideal = Ideal;
}
