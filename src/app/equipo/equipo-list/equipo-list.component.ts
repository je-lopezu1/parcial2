import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { Group } from 'src/app/group';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {

  grupos: Array< Group > = [];
  equipos: Array< Equipo > = [];

  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getGrupos().subscribe((grupos) => {
      this.grupos = grupos;

      // Crear una lista de los equipos en el mundial
      for(let grupo of this.grupos){
        for(let equipo of grupo.teams){
          this.equipos.push(equipo);
        }
      }

    });
  }

  ngOnInit() {
    this.getEquipos();
  }

}
