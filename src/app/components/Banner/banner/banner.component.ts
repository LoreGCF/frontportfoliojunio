import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/persona';

import { LoginService } from 'src/app/services/login.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: Persona[] = [];
  isLoggedIn = false;
  

  constructor(private personaS: PersonaService, public login:LoginService, ) { }

  ngOnInit(): void {
    this.cargarPersona();
    this.isLoggedIn = this.login.isLoggedIn();
  
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
  
      }
    )
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

  cargarPersona(): void{
    this.personaS.list().subscribe(
      data => {
        this.persona = data;
      }
    )
  }

  delete(id?: number): void{
    if(id != undefined){
      this.personaS.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo eliminar la persona");
        }
      )
    }
  }

      
}
  














/*
<p class="fs-3"><b>Lorena G. Cabana Flores</b></p>
                  <p class="fs-4"><i>Developer Full Stack</i></p>
        
                  
                  <article class="d-none d-lg-block mb-3">
                  <p class="fs-5">"...Comencé el Interés por la Programación</p>
                  <p>a través de Márketing Digital en una <em>época de grandes cambios para el mundo</em></p>
                  <p>año 2020..."</p>
                 </article>

*/