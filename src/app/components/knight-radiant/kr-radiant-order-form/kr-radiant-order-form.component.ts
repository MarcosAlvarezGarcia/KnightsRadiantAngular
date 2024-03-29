import { Component } from '@angular/core';
import {User} from "../../../services/auth/user";
import {UserService} from "../../../services/user/user.service";
import {LoginService} from "../../../services/auth/login.service";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kr-radiant-order-form',
  templateUrl: './kr-radiant-order-form.component.html',
  styleUrl: './kr-radiant-order-form.component.css'
})
export class KRRadiantOrderFormComponent {


  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;

  radiantOrderId: number = 0;

  userLoginOn:boolean=false;
  editMode:boolean=false;

  constructor(private userService: UserService, private loginService: LoginService, private krService: KnightRadiantService, private router: Router) {

    this.userService.getUserByEmail(loginService.currentUserEmail).subscribe({
      next: (userData) => {
        this.user=userData;
        let userId = userData.id.toString();
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
  }

  setOrderRadiant(radiantOrderId: number) {
    this.krService.setRadiantOrder(this.user?.id!, radiantOrderId).subscribe(
    response => {
        console.log('Orden radiante establecida correctamente:', response);
        this.router.navigate(['knightsRadiant/user/details']);
        // Aquí puedes manejar la respuesta si es necesario
      },
      error => {
        console.error('Error al establecer la orden radiante:', error);
        // Aquí puedes manejar el error si es necesario
      }
    );
  }

}
