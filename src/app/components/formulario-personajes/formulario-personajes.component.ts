import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { PersonajeService } from '../../services/personaje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global'

@Component({
  selector: 'app-formulario-personajes',
  templateUrl: './formulario-personajes.component.html',
  styleUrls: ['./formulario-personajes.component.css'],
  providers: [PersonajeService]
})
export class FormularioPersonajesComponent implements OnInit {
  public personaje: Personaje;
  public user: any;
  public status: string;
  public page_title: string;
  public titulo_registro: string;

  constructor(
     private _personajeServices: PersonajeService,
     private _router: Router,
     private _route: ActivatedRoute 
  ) {
    this.personaje = new Personaje(null,'', '', '', '', null);
    this.page_title = 'Crear personaje';
    this.titulo_registro = 'Crear un nuevo personaje';
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this._personajeServices.crear(this.personaje).subscribe(

      response => {
        if(response){
          this.status = 'succes';
          this.personaje = response;
          this._router.navigate(['/personajes']);
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

}
/*CONTRUCTOR ANTIGUO 

this.user = {
      descripcion: '',
      nombre_personaje: '',
      apellido: '',
      personalidad: ''
    }

*/

/* onInit Antiguo

//alert("Formulario de personajes funcionando.");
    //console.log(this.personaje);

*/