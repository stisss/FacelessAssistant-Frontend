import { Component, OnInit } from '@angular/core';
import { Mode } from './characters-filters/mode';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  currentMode: Mode = Mode.LIST;
  readonly gridMode: Mode = Mode.GRID;
  readonly listMode: Mode = Mode.LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
