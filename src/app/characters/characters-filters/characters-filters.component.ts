import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Mode } from './mode';

@Component({
  selector: 'app-characters-filters',
  templateUrl: './characters-filters.component.html',
  styleUrls: ['./characters-filters.component.scss']
})
export class CharactersFiltersComponent implements OnInit {
  @Input() mode: Mode;
  @Output() modeChange: EventEmitter<Mode> = new EventEmitter<Mode>();
  readonly listMode: Mode = Mode.LIST;
  readonly gridMode: Mode = Mode.GRID;

  constructor() { }

  ngOnInit(): void {
  }

  onModeChange(mode: Mode): void {
    this.mode = mode;
    this.modeChange.emit(this.mode);
  }

}
