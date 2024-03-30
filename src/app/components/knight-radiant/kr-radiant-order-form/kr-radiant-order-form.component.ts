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

  // Initial sliders values
  valueSlider1left: number = 50; valueSlider1right: number = 50; valueSlider2left: number = 50; valueSlider2right: number = 50; valueSlider3left: number = 50; valueSlider3right: number = 50; valueSlider4left: number = 50; valueSlider4right: number = 50; valueSlider5left: number = 50; valueSlider5right: number = 50; valueSlider6left: number = 50; valueSlider6right: number = 50; valueSlider7left: number = 50; valueSlider7right: number = 50; valueSlider8left: number = 50; valueSlider8right: number = 50; valueSlider9left: number = 50; valueSlider9right: number = 50; valueSlider10left: number = 50; valueSlider10right: number = 50; valueSlider11left: number = 50; valueSlider11right: number = 50; valueSlider12left: number = 50; valueSlider12right: number = 50; valueSlider13left: number = 50; valueSlider13right: number = 50; valueSlider14left: number = 50; valueSlider14right: number = 50; valueSlider15left: number = 50; valueSlider15right: number = 50; valueSlider16left: number = 50; valueSlider16right: number = 50; valueSlider17left: number = 50; valueSlider17right: number = 50; valueSlider18left: number = 50; valueSlider18right: number = 50; valueSlider19left: number = 50; valueSlider19right: number = 50; valueSlider20left: number = 50; valueSlider20right: number = 50; valueSlider21left: number = 50; valueSlider21right: number = 50; valueSlider22left: number = 50; valueSlider22right: number = 50; valueSlider23left: number = 50; valueSlider23right: number = 50; valueSlider24left: number = 50; valueSlider24right: number = 50; valueSlider25left: number = 50; valueSlider25right: number = 50; valueSlider26left: number = 50; valueSlider26right: number = 50; valueSlider27left: number = 50; valueSlider27right: number = 50; valueSlider28left: number = 50; valueSlider28right: number = 50; valueSlider29left: number = 50; valueSlider29right: number = 50; valueSlider30left: number = 50; valueSlider30right: number = 50; valueSlider31left: number = 50; valueSlider31right: number = 50; valueSlider32left: number = 50; valueSlider32right: number = 50; valueSlider33left: number = 50; valueSlider33right: number = 50; valueSlider34left: number = 50; valueSlider34right: number = 50; valueSlider35left: number = 50; valueSlider35right: number = 50; valueSlider36left: number = 50; valueSlider36right: number = 50;














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

  onInputChange1(event: any) {
    this.valueSlider1left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider1right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor1Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor1Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange2(event: any) {
    this.valueSlider2left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider2right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor2Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor2Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange3(event: any) {
    this.valueSlider3left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider3right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor3Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor3Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange4(event: any) {
    this.valueSlider4left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider4right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor4Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor4Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange5(event: any) {
    this.valueSlider5left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider5right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor5Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor5Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange6(event: any) {
    this.valueSlider6left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider6right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor6Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor6Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange7(event: any) {
    this.valueSlider7left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider7right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor7Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor7Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange8(event: any) {
    this.valueSlider8left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider8right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor8Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor8Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange9(event: any) {
    this.valueSlider9left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider9right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor9Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor9Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange10(event: any) {
    this.valueSlider10left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider10right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor10Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor10Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange11(event: any) {
    this.valueSlider11left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider11right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor11Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor11Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange12(event: any) {
    this.valueSlider12left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider12right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor12Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor12Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange13(event: any) {
    this.valueSlider13left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider13right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor13Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor13Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange14(event: any) {
    this.valueSlider14left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider14right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor14Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor14Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange15(event: any) {
    this.valueSlider15left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider15right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor15Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor15Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange16(event: any) {
    this.valueSlider16left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider16right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor16Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor16Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange17(event: any) {
    this.valueSlider17left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider17right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor17Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor17Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange18(event: any) {
    this.valueSlider18left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider18right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor18Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor18Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange19(event: any) {
    this.valueSlider19left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider19right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor19Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor19Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange20(event: any) {
    this.valueSlider20left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider20right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor20Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor20Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange21(event: any) {
    this.valueSlider21left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider21right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor21Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor21Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange22(event: any) {
    this.valueSlider22left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider22right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor22Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor22Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange23(event: any) {
    this.valueSlider23left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider23right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor23Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor23Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange24(event: any) {
    this.valueSlider24left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider24right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor24Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor24Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange25(event: any) {
    this.valueSlider25left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider25right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor25Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor25Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange26(event: any) {
    this.valueSlider26left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider26right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor26Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor26Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange27(event: any) {
    this.valueSlider27left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider27right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor27Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor27Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange28(event: any) {
    this.valueSlider28left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider28right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor28Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor28Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange29(event: any) {
    this.valueSlider29left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider29right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor29Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor29Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange30(event: any) {
    this.valueSlider30left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider30right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor30Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor30Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange31(event: any) {
    this.valueSlider31left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider31right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor31Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor31Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange32(event: any) {
    this.valueSlider32left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider32right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor32Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor32Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange33(event: any) {
    this.valueSlider33left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider33right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor33Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor33Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange34(event: any) {
    this.valueSlider34left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider34right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor34Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor34Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange35(event: any) {
    this.valueSlider35left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider35right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor35Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor35Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }

  onInputChange36(event: any) {
    this.valueSlider36left = 100 - event.target.value; // Actualiza el valor del slider
    this.valueSlider36right = event.target.value; // Actualiza el valor del slider
  }
  getTextValueColor36Left(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
  getTextValueColor36Right(value: number): string {
    // Calcula el valor interpolado entre 0 y 100 en función del valor del slider
    const interpolatedValue = Math.round((value - 50) * 2);
    // Limita el valor interpolado dentro del rango 0-100
    const finalValue = Math.max(0, Math.min(100, interpolatedValue));
    const finalValue2 = 100 - value;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (value > 50) {
      red = Math.round(0 + (0 - 0) * (finalValue / 100));
      green = Math.round(0 + (255 - 0) * (finalValue / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue / 100));
    }
    if (value < 50) {
      red = Math.round(0 + (255 - 0) * (finalValue2 / 100));
      green = Math.round(0 + (0 - 0) * (finalValue2 / 100));
      blue = Math.round(0 + (0 - 0) * (finalValue2 / 100));
    }


    // Devuelve el color en formato hexadecimal RGB
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
