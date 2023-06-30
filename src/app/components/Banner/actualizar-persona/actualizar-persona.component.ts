import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit {

 

  persona: Persona = null; 

  constructor(private personaS: PersonaService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar la persona");
        this.route.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params[''];
    this.personaS.update(id, this.persona).subscribe(
      data => {
        alert("Modificacion correcta");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudo modificar la persona");
        this.route.navigate(['']);
      }
    )
  }





}
