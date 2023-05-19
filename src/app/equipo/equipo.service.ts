import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import { Equipo } from './equipo';
import { Group } from '../group';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipos: Equipo[] = [];
  private apiUrl: string = environment.baseUrl2;

  constructor(private http: HttpClient) { }

  getGrupos(): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl)
}
}
