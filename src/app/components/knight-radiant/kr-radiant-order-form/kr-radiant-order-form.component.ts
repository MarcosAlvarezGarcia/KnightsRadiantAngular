import {Component, ElementRef, OnInit} from '@angular/core';
import {User} from "../../../services/auth/user";
import {UserService} from "../../../services/user/user.service";
import {LoginService} from "../../../services/auth/login.service";
import {KnightRadiantService} from "../../../services/knightRadiant/knight-radiant.service";
import {Router} from "@angular/router";
import {RadiantOrderService} from "../../../services/radiant-order/radiant-order.service";
import {RadiantOrder} from "../../../classes/radiant-order/radiant-order";
import {Surge} from "../../../classes/surge/surge";
import {UserDetailsComponent} from "../../user/user-details/user-details/user-details.component";

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

  // Variable orden elegida
  surges: Surge[] = [];
  radiantOrder: RadiantOrder = new RadiantOrder(0, "", "", "", "", "", "", "", "", "", this.surges);

  // Variable sonido
  thunder = new Audio();

  // Colores botones
  normalColor: string = '#866c46';

  // Variables para controlar la visibilidad de las pantallas
  quizScreenVisible: boolean = true;
  orderScreenVisible: boolean = false;
  stadisticsViewVisible: boolean = false;

  // Initial attributes values
  valueSlider1left: number = 50; valueSlider1right: number = 50; valueSlider2left: number = 50; valueSlider2right: number = 50; valueSlider3left: number = 50; valueSlider3right: number = 50; valueSlider4left: number = 50; valueSlider4right: number = 50; valueSlider5left: number = 50; valueSlider5right: number = 50; valueSlider6left: number = 50; valueSlider6right: number = 50; valueSlider7left: number = 50; valueSlider7right: number = 50; valueSlider8left: number = 50; valueSlider8right: number = 50; valueSlider9left: number = 50; valueSlider9right: number = 50; valueSlider10left: number = 50; valueSlider10right: number = 50; valueSlider11left: number = 50; valueSlider11right: number = 50; valueSlider12left: number = 50; valueSlider12right: number = 50; valueSlider13left: number = 50; valueSlider13right: number = 50; valueSlider14left: number = 50; valueSlider14right: number = 50; valueSlider15left: number = 50; valueSlider15right: number = 50; valueSlider16left: number = 50; valueSlider16right: number = 50; valueSlider17left: number = 50; valueSlider17right: number = 50; valueSlider18left: number = 50; valueSlider18right: number = 50; valueSlider19left: number = 50; valueSlider19right: number = 50; valueSlider20left: number = 50; valueSlider20right: number = 50; valueSlider21left: number = 50; valueSlider21right: number = 50; valueSlider22left: number = 50; valueSlider22right: number = 50; valueSlider23left: number = 50; valueSlider23right: number = 50; valueSlider24left: number = 50; valueSlider24right: number = 50; valueSlider25left: number = 50; valueSlider25right: number = 50; valueSlider26left: number = 50; valueSlider26right: number = 50; valueSlider27left: number = 50; valueSlider27right: number = 50; valueSlider28left: number = 50; valueSlider28right: number = 50; valueSlider29left: number = 50; valueSlider29right: number = 50; valueSlider30left: number = 50; valueSlider30right: number = 50; valueSlider31left: number = 50; valueSlider31right: number = 50; valueSlider32left: number = 50; valueSlider32right: number = 50; valueSlider33left: number = 50; valueSlider33right: number = 50; valueSlider34left: number = 50; valueSlider34right: number = 50; valueSlider35left: number = 50; valueSlider35right: number = 50; valueSlider36left: number = 50; valueSlider36right: number = 50;

  // Initial sliders values
  resultSlidersValues : number[] = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];

  orders = [
    "Windrunner",
    "Skybreaker",
    "Dustbringer",
    "Edgedancer",
    "Truthwatcher",
    "Lightweaver",
    "Elsecaller",
    "Willshaper",
    "Stoneward",
    "Bondsmith"
  ];

  quizPrompts = ["1b", "2b", "3b", "4b", "5b", "6b", "7b", "8b", "9b", "10b", "11b", "12b", "13b", "14b", "15b", "16b", "17b", "18b", "19b", "20b", "21b", "22b", "23b", "24b", "25b", "26b", "27b", "28b", "29b", "30b", "31b", "32b", "33b", "34b"]

  traitData = {
    "1b": [35,	75,	20,	15,	80,	0,	100,	35,	50,	70],
    "2b": [25,	0,	10,	60,	100,	30,	20,	25,	15,	30],
    "3b": [60,	40,	100,	20,	15,	85,	0,	65,	75,	80],
    "4b": [90,	55,	95,	47,	10,	50,	13,	57,	93,	30],
    "5b": [10,	0,	61,	25,	89,	55,	100,	45,	23,	20],
    "6b": [9,	52,	100,	7,	47,	53,	41,	59,	65,	0],
    "7b": [45,	79,	52,	10,	85,	41,	80,	53,	37,	0],
    "8b": [15,	25,	70,	35,	100,	43,	20,	11,	42,	0],
    "9b": [0,	15,	80,	10,	50,	90,	30,	70,	15,	20],
    "10b": [10,	100,	55,	0,	20,	25,	79,	42,	50,	25],
    "11b": [35,	90,	15,	0,	100,	10,	85,	20,	40,	15],
    "12b": [48,	60,	12,	61,	100,	39,	85,	0,	50,	75],
    "13b": [60,	0,	23,	85,	45,	81,	75,	100,	30,	70],
    "14b": [45,	75,	87,	50,	50,	13,	79,	15,	85,	70],
    "15b": [25,	15,	0,	8,	45,	85,	57,	100,	15,	11],
    "16b": [69,	88,	45,	20,	53,	0,	25,	30,	100,	20],
    "17b": [12,	15,	100,	15,	50,	78,	13,	60,	0,	10],
    "18b": [70,	75,	45,	0,	100,	85,	10,	90,	10,	30],
    "19b": [35,	100,	65,	50,	60,	20,	15,	25,	0,	20],
    "20b": [25,	11,	55,	69,	22,	31,	44,	75,	30,	70],
    "21b": [0,	25,	22,	55,	85,	100,	15,	75,	15,	15],
    "22b": [75,	85,	23,	59,	85,	25,	22,	15,	30,	90],
    "23b": [25,	15,	85,	20,	20,	75,	0,	70,	20,	20],
    "24b": [85,	85,	47,	90,	49,	35,	0,	30,	70,	100],
    "25b": [55,	81,	45,	60,	89,	31,	85,	30,	47,	80],
    "26b": [15,	55,	55,	0,	15,	100,	76,	53,	45,	10],
    "27b": [75,	90,	0,	40,	85,	25,	88,	100,	70,	25],
    "28b": [65,	31,	40,	0,	40,	45,	15,	85,	100,	20],
    "29b": [25,	45,	100,	0,	41,	35,	10, 75,	76,	25],
    "30b": [42,	75,	40,	22,	80,	0,	100,	64,	80,	15],
    "31b": [78,	70,	80,	50,	0,	60,	50,	50,	100,	75],
    "32b": [0,	10,	100,	10,	41,	69,	79,	85,	50,	20],
    "33b": [58,	20,	20,	100,	84,	59,	16,	25,	0,	70],
    "34b": [25,	40,	20,	10,	0,	70,	30,	20,	70,	0]
  };

  imagePaths: string[] = [
    'assets/img/Orders_Logo/01_windrunner_placard.jpg',
    'assets/img/Orders_Logo/02_skybreaker_placard.jpg',
    'assets/img/Orders_Logo/03_dustbringer_placard.jpg',
    'assets/img/Orders_Logo/04_edgedancer_placard.jpg',
    'assets/img/Orders_Logo/05_truthwatcher_placard.jpg',
    'assets/img/Orders_Logo/06_lightweaver_placard.jpg',
    'assets/img/Orders_Logo/07_elsecaller_placard.jpg',
    'assets/img/Orders_Logo/08_willshaper_placard.jpg',
    'assets/img/Orders_Logo/09_stoneward_placard.jpg',
    'assets/img/Orders_Logo/10_bondsmith_placard.jpg'
  ];

  orderAsigned :number = 0;
  radiantOrders: RadiantOrder[] = [];
  resultsInPercentage : number[] = [];


  constructor(private userService: UserService, private loginService: LoginService, private krService: KnightRadiantService, private userDetails: UserDetailsComponent, private router: Router, private radiantOrderService: RadiantOrderService, private elRef: ElementRef) {

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

    this.thunder.src = '/assets/audio/sounds/thunder.mp3';
    this.thunder.volume = 0.3;
    this.thunder.load();

    this.getRadiantOrderList();

    document.documentElement.style.setProperty('--button-color', this.normalColor);
    document.documentElement.style.setProperty('--progress-color', this.normalColor);
  }

  start(){
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.userDetails.orderForm = false;
    this.userDetails.loadPage = true;
    //this.router.navigate(['knightsRadiant/user/details']);
  }


  setOrderRadiant(radiantOrderId: number) {
    this.krService.setRadiantOrder(this.user?.knightRadiant.id!, radiantOrderId).subscribe(
      response => {
        console.log('Orden radiante establecida correctamente:', response);
        //this.router.navigate(['knightsRadiant/user/details']);
        // Aquí puedes manejar la respuesta si es necesario
      },
      error => {
        console.error('Error al establecer la orden radiante:', error);
        // Aquí puedes manejar el error si es necesario
      }
    );
  }

  getRadiantOrderList(){
    this.radiantOrderService.getRadiantOrderList().subscribe(radiantOrders => {
        this.radiantOrders = radiantOrders;
      }
    );
  }

  getRadiantOrderById(id : number){
    this.radiantOrderService.getRadiantOrderById(id).subscribe(data => {
      this.radiantOrder = data;
      this.radiantOrder = data;
    }, error => console.log(error));
  }

  sayTheWords() {
    var results: number[] = this.calculateResults();
    var chosenOrder = 0;
    var lowScore = 999999;
    for (var k = 0; k < results.length; k++) {
      if (results[k] < lowScore) {
        chosenOrder = k;
        lowScore = results[k];
      }
    }
    this.orderAsigned = chosenOrder + 1;
    console.info("results")
    console.info(results);
    this.radiantOrders = this.sortObjectsWithIndices(this.radiantOrders, results);
    var sortResults = this.sortWithIndices(results);
    console.info("toSort")
    console.info(sortResults);
    var normalizedResults = this.normalizedResults(sortResults);
    console.info("normalizedResults");
    console.info(normalizedResults);
    console.info("chosen order" + chosenOrder);
    this.resultsInPercentage = normalizedResults;
    this.thunder.currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
    this.thunder.play();
    this.toggleScreens();
    this.setOrderRadiant(this.orderAsigned);
    this.getRadiantOrderById(this.orderAsigned);
  }

  calculateResults() {
    var results : number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sliders = this.resultSlidersValues;
    var promptTrait : string;
    for (var i = 0; i < Object.keys(this.traitData).length; i++) {
      var promptSliderValue = sliders[i];
      promptTrait = this.quizPrompts[i];
      var tempResults = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (var j = 0; j < this.orders.length; j++) {
        // @ts-ignore
        tempResults[j] = Math.abs(this.traitData[promptTrait][j] - promptSliderValue) ** 2;
        results[j] += tempResults[j];
      }
      console.info("Trait " + promptTrait + " resulted in " + tempResults);
    }
    results[9] *= 1.3;
    console.info("Order totals: " + results);
    return results;
  }

  sortWithIndices(toSort: number[]): number[] {
    const indexedArray: [number, number][] = [];
    for (let i = 0; i < toSort.length; i++) {
      indexedArray.push([toSort[i], i]);
    }
    indexedArray.sort(function(left, right) {
      return left[0] < right[0] ? -1 : 1;
    });
    const sortIndices: number[] = [];
    for (let j = 0; j < indexedArray.length; j++) {
      sortIndices.push(indexedArray[j][1]);
      toSort[j] = indexedArray[j][0];
    }
    (toSort as any).sortIndices = sortIndices;
    return toSort;
  }

  sortObjectsWithIndices<T>(objects: T[], indices: number[]): T[] {
    const indexedArray: [T, number][] = [];

    // Creamos un array de tuplas [objeto, índice]
    for (let i = 0; i < objects.length; i++) {
      indexedArray.push([objects[i], indices[i]]);
    }

    // Ordenamos el array de acuerdo a los índices
    indexedArray.sort((left, right) => {
      return left[1] - right[1];
    });

    // Actualizamos la lista original de objetos con el nuevo orden
    const sortedObjects: T[] = [];
    for (let j = 0; j < indexedArray.length; j++) {
      sortedObjects.push(indexedArray[j][0]);
    }

    return sortedObjects;
  }


  normalizedResults(results: number[]) {
    var normalizedResults = [];
    for (var i = 0; i < results.length; i++) {
      normalizedResults[i] = Math.floor((120000 - results[i]) / 1200);
    }
    return normalizedResults;
  }

  // Método para cambiar entre las pantallas
  toggleScreens() {
    this.quizScreenVisible = !this.quizScreenVisible;
    this.orderScreenVisible = !this.orderScreenVisible;
  }

  seeStadistics() {
    this.stadisticsViewVisible = !this.stadisticsViewVisible;
    const scrollStep = window.innerHeight / 60; // Divide la ventana en x pasos de desplazamiento
    let scrollCount = 0;
    const scrollInterval = setInterval(() => {
      if (scrollCount < 60) {
        window.scrollBy(0, scrollStep); // Desplaza hacia abajo un paso
        scrollCount++;
      } else {
        clearInterval(scrollInterval); // Detiene el desplazamiento después de 3 segundos
      }
    }, 25); // Realiza un paso cada 100 milisegundos
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
}
