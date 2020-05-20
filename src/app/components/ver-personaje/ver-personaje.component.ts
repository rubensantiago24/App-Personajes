import { Component, OnInit } from '@angular/core';
/*PARA GET UNICO*/
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../models/personaje';
import { Global } from '../../services/global';

@Component({
  selector: 'app-ver-personaje',
  templateUrl: './ver-personaje.component.html',
  styleUrls: ['./ver-personaje.component.css'],
  providers: [PersonajeService]
})
export class VerPersonajeComponent implements OnInit {

  public personaje: Personaje ;
  public url: string;


  constructor(
    private _personajeService: PersonajeService,
    /*GET UNICO*/
    private _route: ActivatedRoute,
    private _router: Router 
  ) { 

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._personajeService.getPersonaje(id).subscribe(
        response => {
          if(response) {
            this.personaje = response;
            console.log(response);
            console.log('Funciona');
          }else {
            this._router.navigate(['/home']);
          }
          /*
          if(response.status(304)){
            this._router.navigate(['/home']);
          }
          */
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

}

/*saddddddddddddddddddddddddddddddddddddddddddddddddddd*/
/*

this._route.params.subscribe(params => {
      let id = params['id'];

      this._personajeService.getPersonaje(id).subscribe(
        res =>{
          if(res){
            this.personajes = res;
           /*console.log('ESTA BIEN LA PARTE DEL COMPONENTE');
            console.log(res);
          }else{
            //console.log(['/home']);
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });

*/