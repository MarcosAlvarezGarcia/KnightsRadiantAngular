import {Component, HostListener} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AudioKnightsRadiantService} from "../../../services/audio/audioKnightsRadiant/audio-knights-radiant.service";
import {AuthService} from "../../../services/auth/auth.service";
import {RadiantOrderService} from "../../../services/radiant-order/radiant-order.service";
import {SurgeService} from "../../../services/surge/surge.service";
import {PowersService} from "../../../services/user/powers.service";
import {ViewsStatesService} from "../../../services/viewsStates/views-states.service";
import {User} from "../../../services/auth/user";

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css'
})
export class MissionsComponent {
  userDataString = localStorage.getItem('userData');
  userData: any;

  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;
  radiantId : number = 0;
  orderName: String = "";
  currentRadiantIdeal : number = 0;
  nextIdeal: boolean = false;

  ideal: string = "";

  userLoginOn:boolean=false;
  editMode:boolean=false;

  normalColor: string = '#866c46';
  orderColor: String = "";
  orderId: number = 0;
  thunder = new Audio();
  constructor(private userService: UserService, private krService: KnightRadiantService, private router: Router, private authService: AuthService,  private audioKnightsRadiantService: AudioKnightsRadiantService) {
    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.3;
    this.thunder.load();
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

    this.audioKnightsRadiantService.audio.volume = 0.6;

    this.userService.getUserByEmail(this.userData.email).subscribe({
      next: (userData) => {
        this.user=userData;
        if (this.user.knightRadiant && this.user.knightRadiant.radiantOrder) {
          this.orderColor = this.user.knightRadiant.radiantOrder.color;
          this.radiantId = this.user.knightRadiant.id;
          this.orderId = this.user.knightRadiant.radiantOrder.id;
          this.orderName = this.user.knightRadiant.radiantOrder.name;
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
  @HostListener('document:click', ['$event'])
  @HostListener('document:keydown', ['$event'])
  handleUserInteraction(event: Event) {
    // Reproduce la música cuando el usuario interactúa con la página
    if (!this.audioKnightsRadiantService.isAudioPlaying()) {
      this.audioKnightsRadiantService.playNextSong();
      //this.wokvideo.playVideo();
    }
  }

  setMissionsCompleted(id: number): void {
    this.krService.setMissionsCompleted(this.userData.knightRadiant.id).subscribe(
      response => {
        console.log('Misiones completadas establecidas correctamente:', response);
        // Manejar la respuesta si es necesario
      },
      error => {
        console.error('Error al establecer misiones completadas:', error);
        // Manejar el error si es necesario
      }
    );
  }
}
