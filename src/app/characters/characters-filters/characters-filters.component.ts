import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Mode } from './mode';

@Component({
  selector: 'app-characters-filters',
  templateUrl: './characters-filters.component.html',
  styleUrls: ['./characters-filters.component.scss']
})
export class CharactersFiltersComponent implements OnInit {
  @Input() names: Array<string>;
  @Input() actors: Array<string>;
  @Input() houses: Array<string>;
  @Input() cultures: Array<string>;
  @Input() mode: Mode;

  @Output() modeChange: EventEmitter<Mode> = new EventEmitter<Mode>();
  @Output() namesChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() actorsChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() culturesChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() housesChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  readonly listMode: Mode = Mode.LIST;
  readonly gridMode: Mode = Mode.GRID;

  constructor() { }

  ngOnInit(): void {
  }

  onModeChange(mode: Mode): void {
    this.mode = mode;
    this.modeChange.emit(this.mode);
  }

  onNamesChange(name: string): void {
    this.namesChange.emit(name);
  }

  onActorsChange(actor: string): void {
    this.actorsChange.emit(actor);
  }

  onCulturesChange(cultures: Array<string>): void {
    this.culturesChange.emit(cultures);
  }

  onHousesChange(houses: Array<string>): void {
    this.housesChange.emit(houses);
  }

}
