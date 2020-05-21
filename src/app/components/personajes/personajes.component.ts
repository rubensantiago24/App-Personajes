import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../models/personaje';
import { Global } from '../../services/global';
import { ActivatedRoute, Router } from '@angular/router';

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
    private _personajeService: PersonajeService,
    private _router: Router,
    private _route: ActivatedRoute 
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

  delete(id){
    this._personajeService.deletePersonaje(id).subscribe(
      response =>{
        this._router.navigateByUrl('/RefreshComponent', { skipLocationChange:true }).then(() => {

        this._router.navigate(['/personajes']);
        console.log(response);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

}
