import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Partido } from './partido';
import { Equipo } from '../equipo/equipo';
import { Home } from '../home';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }
getPartidos(): Observable<Partido[]> {
  return this.http.get<Partido[]>(this.apiUrl);
}
ordenarEquipos(partidos: Array<Partido>): void {
  let equipos: Array<Home> = []
  //partidos.forEach(partido => {
    // if(equipos.includes(partido.home_team)){
    //   equipos.find(partido.home_team).goals += partido.home_team.goals
    // }
}
}

