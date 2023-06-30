export class Persona {
     id?: number; 
    nombre:string;
    cargo:string;
    descripcion1:string;
    descripcion2:string;
    descripcion3:string;
    img: string;
    

    constructor (nombre: string, cargo:string, descripcion1: string,descripcion2: string,descripcion3: string, img: string){
        this.nombre = nombre;
        this.cargo = cargo;
        this.descripcion1 = descripcion1;
        this.descripcion2 = descripcion2;
        this.descripcion3 = descripcion3;
        this.img = img;

    }
}
