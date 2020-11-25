import { Component, OnInit } from '@angular/core';
import { Mode } from './characters-filters/mode';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  currentMode: Mode = Mode.LIST;
  readonly gridMode: Mode = Mode.GRID;
  readonly listMode: Mode = Mode.LIST;

  names: Array<string>;
  actors: Array<string>;
  houses: Array<string>;
  cultures: Array<string>;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadNames();
    this.loadActors();
    this.loadCultures();
    this.loadHouses();
  }

  loadNames(): void {
    this.charactersService.getNames().subscribe(res => {
      this.names = res;
    });
  }

  loadActors(): void {
    this.charactersService.getActors().subscribe(res => {
      this.actors = res;
    });
  }

  loadCultures(): void {
    this.charactersService.getCultures().subscribe(res => {
      this.cultures = res.filter(x => x !== '');
    });
  }

  loadHouses(): void {
    this.charactersService.getHouses().subscribe(res => {
      this.houses = res.filter(x => x !== '');
    });
  }
}
