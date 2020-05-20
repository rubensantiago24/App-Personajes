import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { PersonajeService } from '../../services/personaje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global'

@Component({
  selector: 'app-personaje-edit',
  templateUrl: '../formulario-personajes/formulario-personajes.component.html',
  styleUrls: ['./personaje-edit.component.css'],
  providers: [PersonajeService]
})
export class PersonajeEditComponent implements OnInit {
  public personaje: Personaje;
  public user: any;
  public status: string;
  public page_title: string;
  public titulo_registro: string;
  public is_edit: boolean;

  constructor(
     private _personajeServices: PersonajeService,
     private _router: Router,
     private _route: ActivatedRoute 
  ) {
    this.personaje = new Personaje(null, '', '', '', '', null);
    this.is_edit = true;
    this.page_title = 'Editar personaje';
    this.titulo_registro = 'Editar el personaje';
   }

  ngOnInit(): void {
    this.getPersonaje();
  }

  onSubmit(){
    this._personajeServices.update(this.personaje._id, this.personaje).subscribe(

      response => {
        if(response){
          this.status = 'succes';
          this.personaje = response;
          this._router.navigate(['/personajes']);
          console.log(response);
          
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

getPersonaje(){
  this._route.params.subscribe(params => {
    let id = params['id'];

    this._personajeServices.getPersonaje(id).subscribe(
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
