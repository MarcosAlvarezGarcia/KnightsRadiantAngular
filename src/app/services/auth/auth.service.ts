import { Injectable } from '@angular/core';
import {ViewsStatesService} from "../viewsStates/views-states.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'userToken';
  private readonly USER_KEY = 'userData';
  constructor(private viewsStateService: ViewsStatesService) { }

  // Método para almacenar el token y los datos del usuario en el almacenamiento local
  // ¡¡¡¡¡¡¡IMPORTANTE!!!!!!!!
  // Utilizo localStorage y no sessionStorage para que al recargar la página no se pierdan los datos del usuario junto al token y tenga que volver a iniciar sesión
  storeUserData(userData: any, token: string) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Método para obtener el token almacenado del almacenamiento local
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Método para obtener los datos del usuario almacenados del almacenamiento local
  getUserData(): any | null {
    const userData = localStorage.getItem(this.USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  // Método para eliminar el token y los datos del usuario del almacenamiento local (cerrar sesión)
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.viewsStateService.setViewLogin(false);
  }

  // Método para verificar si el usuario está autenticado (tiene un token válido)
  isAuthenticated(): boolean {
    const token = this.getToken();
    // Verifica si el token existe y si no ha expirado
    return token !== null && !this.isTokenExpired(token);
  }

  // Método para verificar si un token JWT ha expirado
  private isTokenExpired(token: string): boolean {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}
