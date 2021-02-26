import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Auth } from '../interfaces/auth.interface';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.apiEndpoint;
  private _auth: Auth | undefined;

  get auth(){
    return {...this._auth!};
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> | boolean{

    if(localStorage.getItem('token')){
      return false;
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map( auth => {
          console.log('map', auth)
          return true;
        })
      )
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('token', auth.id))
    )
  }

}
