import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import  firebaseApp  from 'firebase/auth';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user$!: Observable<firebaseApp.User | null>
  isLoading = false
  errorMessage: string = ''

  constructor(private _srvAuth: AuthService) {}

  ngOnInit(): void {
    this.user$ = this._srvAuth.getUser()
  }

  async onGoogleLogin(): Promise <void> {
    this.isLoading = true
    try{
      await this._srvAuth.loginwhitGoogle()
      console.log('Login with google')
    }catch(error){
      this.errorMessage = 'Error al iniciar sesion'
      console.error(error)
    }finally{
      this.isLoading = false
    }
  }

  async logout(): Promise <void> {
    this.isLoading = true
    try{
      await this._srvAuth.logout()
      console.log('Logout')
    }catch(error){
      this.errorMessage = 'Error al cerrar sesion'
      console.error(error)
    }finally{
      this.isLoading = false
    }
  }
}
