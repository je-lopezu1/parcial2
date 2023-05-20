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
    });
  }

  // order(partidos: Array< Partido >): void {
  //   this.ordenados = this.partidoService.ordenarEquipos(partidos)
  // }

  ngOnInit() {
    this.getPartidos();
  }

}
