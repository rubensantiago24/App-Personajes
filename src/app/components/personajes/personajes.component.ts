import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../models/personaje';
import { Global } from '../../services/global';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [PersonajeService]
})
export class PersonajesComponent implements OnInit {

  public personajes: Personaje[];
  public url: string;

  constructor(
    private _personajeService: PersonajeService
  ) {}

  ngOnInit(): void {
    this._personajeService.getPersonajes().subscribe(
      response => {
        if (response) {
          this.personajes = response;
          console.log(response);
          console.log('Funciona');
        } else {
          console.log('No funciona');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
