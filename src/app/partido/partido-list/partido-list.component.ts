import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';
import { Home } from 'src/app/home';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {
  ordenados: Array< Home > = []
  partidos: Array< Partido > = []

  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    // Crear lista de equipos home ordenada por goles a favor
    // for(let partido of this.partidos){
    //   if (this.ordenados.includes(partido.home_team)) {
    //     this.ordenados.find(partido.home_team).goals += partido.home_team.goals;
    //   } else
    //     this.ordenados.push(partido.home_team);
    // }
    // this.ordenados.sort((a,b) => b.goals - a.goals);

    });
  }



  ngOnInit() {
    this.getPartidos();
  }

}
