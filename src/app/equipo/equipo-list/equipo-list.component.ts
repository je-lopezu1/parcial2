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
    this.equipoService.getGrupos().subscribe((grupos: { groups: any; }) => {
      let tempo: Group[] = [];
      // Crear una lista de los equipos en el mundial
      console.log(grupos.groups);
      grupos.groups.forEach((grupo: Group) => {
        grupo.teams.forEach((equipo) => {
          this.equipos.push(equipo);
        });
        tempo.push(grupo);
      });
      this.grupos = tempo;
  });
}

  ngOnInit() {
    this.getEquipos();
  }

}
