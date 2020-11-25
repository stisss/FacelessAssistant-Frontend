import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Mode } from './characters-filters/mode';
import { CharactersService } from './characters.service';
import { CharactersFilter } from './models/characters-filter';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  currentMode: Mode = Mode.LIST;
  readonly gridMode: Mode = Mode.GRID;
  readonly listMode: Mode = Mode.LIST;

  names: Array<string>;
  actors: Array<string>;
  houses: Array<string>;
  cultures: Array<string>;

  selectedNames: Array<string>;
  selectedActors: Array<string>;
  selectedHouses: Array<string>;
  selectedCultures: Array<string>;

  charactersFilter: CharactersFilter;
  filterChangedSubject: Subject<CharactersFilter> = new Subject();

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersFilter = new CharactersFilter();
    this.loadNames();
    this.loadActors();
    this.loadCultures();
    this.loadHouses();
  }

  ngOnDestroy(): void {
    this.filterChangedSubject.next();
    this.filterChangedSubject.complete();
  }

  onModeChange(mode: Mode): void {
    this.currentMode = mode;

    // TODO get rid of this hack
    setTimeout(() => {
      this.filterChangedSubject.next(this.charactersFilter);
    }, 800);
  }

  loadNames(): void {
    this.charactersService.getNames().subscribe(res => {
      this.names = res.sort();
    });
  }

  loadActors(): void {
    this.charactersService.getActors().subscribe(res => {
      this.actors = res.sort();
    });
  }

  loadCultures(): void {
    this.charactersService.getCultures().subscribe(res => {
      this.cultures = res.filter(x => x !== '').sort();
      this.charactersFilter.cultures = this.cultures;
    });
  }

  loadHouses(): void {
    this.charactersService.getHouses().subscribe(res => {
      this.houses = res.filter(x => x !== '').sort();
      this.charactersFilter.houses = this.houses;
    });
  }

  onNameChange(name: string): void {
    this.charactersFilter.name = name;
    this.filterChangedSubject.next(this.charactersFilter);
  }

  onActorChange(actor: string): void {
    this.charactersFilter.actor = actor;
    this.filterChangedSubject.next(this.charactersFilter);
  }

  onHousesChange(houses: Array<string>): void {
    this.charactersFilter.houses = houses;
    this.filterChangedSubject.next(this.charactersFilter);
  }

  onCulturesChange(cultures: Array<string>): void {
    this.charactersFilter.cultures = cultures;
    this.filterChangedSubject.next(this.charactersFilter);
  }

}
