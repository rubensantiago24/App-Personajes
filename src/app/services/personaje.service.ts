import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje';
import { Global } from './global';


@Injectable({
  providedIn: 'root'
})

export class PersonajeService {

  public url: string;


  constructor(
    private _http: HttpClient

  ){ 
    this.url = Global.url;
  }

getPersonajes():Observable<any>{
 
  return this._http.get(this.url+'personajes');

}


getPersonaje(personajeId):Observable<any>{
  return this._http.get(this.url+'personajes/'+personajeId)
}

crear(personaje):Observable<any>{
  let params = JSON.stringify(personaje);
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.post(this.url+'personajes/create', params, {headers: headers});
}

update(id, personaje):Observable<any>{
  let params = JSON.stringify(personaje);
  let headers = new HttpHeaders().set('Content-type', 'application/json');

  return this._http.put(this.url+'personajes/personaje/'+id, params, {headers: headers});
}

delete(id):Observable<any>{
  let headers = new HttpHeaders().set('Content-type', 'application/json');
  return this._http.delete(this.url+'personaje/'+id, {headers: headers});
}



}
