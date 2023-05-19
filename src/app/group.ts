import { Equipo } from "./equipo/equipo";

export class Group {
  letter: string;
  teams: Equipo[];

  constructor(letter: string, teams: Equipo[]) {
    this.letter = letter;
    this.teams = teams;
  }
}
