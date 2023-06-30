import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {

  

  nombre: string;
  cargo: string;
  descripcion1: string;
  descripcion2: string;
  descripcion3: string;
  img: string;

  //router nos redirige una vez cargado el nuevo componente a la vista principal sin tener que clikear ningun otro boton
  constructor(private personaS: PersonaService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const persona= new Persona(this.nombre, this.cargo, this.descripcion1,this.descripcion2,this.descripcion3, this.img);
    this.personaS.save(persona).subscribe(

      data => {
        alert("Persoa añadida correctamente");
        //agregada la persona me lleva a la vista principal
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo cargar la persona");
        this.router.navigate(['']);
      }
    )

  }



}
