import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {
  ordenados: Array< {equipo: string; goles: number} > = []
  partidos: Array< Partido > = []

  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
      this.ordenarEquipos();
    });
  }

  ordenarEquipos(): void {
    const equipoGoles = this.partidos.reduce((acc, partido) => {
      const equipo = partido.home_team.name;
      const goles = partido.home_team.goals;
      if (!isNaN(goles) && goles !== undefined){
        acc.set(equipo, (acc.get(equipo) || 0) + goles);
      } return acc;
    }, new Map<string, number>());
    this.ordenados = [...equipoGoles.entries()].map(([equipo, goles]) => ({equipo, goles})).sort((a, b) => b.goles - a.goles);
  }

  ngOnInit() {
    this.getPartidos();
    this.ordenarEquipos();
  }

}
