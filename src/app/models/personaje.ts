export class Personaje{
   
    constructor(
    public _id: string,
    public descripcion: string,
    public nombre: string,
    public apellido: string,
    public personalidad: string,
    public imagen_personaje: string
    ){}
}

 /*
    public descripcion: string;
    public nombre: string;
    public apellido: string;
    public personalidad: string;
    public imagen_personaje: string;

    constructor(descripcion, nombre, apellido, personalidad, imagen_personaje){
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.personalidad = personalidad;
        this.imagen_personaje = imagen_personaje;
    }*/
