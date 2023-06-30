import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Persona } from '../Modelo/persona';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/persona/';
  
  constructor(private http:HttpClient) { }


  //para traer la lista de persona 

  public list(): Observable<Persona[]> {

    return this.http.get<Persona[]>(this.URL + 'listar');
    
  }


  // para traer por id 
  
  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${baserUrl}/detail/${id}`);
  }

  
//para guardar una persona 

  public save(persona: Persona): Observable<any> {
    return this.http.post<any>(`${baserUrl}/crear`, persona);
  }


//actualizar persona

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(`${baserUrl}/actualizar`, persona);
  }

//eliminar una persona 

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${baserUrl}/eliminar/${id}`);
  } 



 
}


