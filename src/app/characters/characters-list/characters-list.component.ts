import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DialogService } from 'src/app/core/dialogs/dialog.service';
import { CharactersService } from '../characters.service';
import { CharacterPreview } from '../models/character-preview.model';
import { CharactersFilter } from '../models/characters-filter';
import { SortParameter } from './sortingParameter';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {
  charactersPreviews: Array<CharacterPreview>;
  charactersPreviewsFiltered: Array<CharacterPreview>;
  nameAscending: boolean = false;
  aliasAscending: boolean = false;
  houseAscending: boolean = false;
  cultureAscending: boolean = false;
  actorAscending: boolean = false;
  currentSortParameter: SortParameter = SortParameter.NAME;
  sortParameter = SortParameter;

  @Input() updateEvent: Subject<CharactersFilter>;
  private subscription$: Subscription;

  @Input() charactersFilter: CharactersFilter;

  constructor(private charactersService: CharactersService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    if (!this.charactersFilter) {
      this.charactersFilter = new CharactersFilter();
    }
    this.loadCharactersPreviews();
    this.subscription$ = this.updateEvent.subscribe(res => {
      this.charactersFilter = res;
      this.charactersPreviewsFiltered = this.charactersPreviews.filter(character =>
        // (this.charactersFilter.name === null || character.name === this.charactersFilter.name)
        // && character.actors.includes(this.charactersFilter.actor)
        character.houses.filter(h => this.charactersFilter.houses.includes(h)).length > 0
        && this.charactersFilter.cultures.includes(character.culture)
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  loadCharactersPreviews(): void {
    this.charactersService.getCharactersPreviews().subscribe(res => {
      this.charactersPreviews = res.map(x => new CharacterPreview(x));
      this.charactersPreviewsFiltered = this.charactersPreviews;
    });
  }

  onItemClick(character: CharacterPreview): void {
    this.dialogService.showCharacterPreviewDialog(character);
  }

  sortByName(): void {
    if (this.nameAscending) {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((b, a) => a.name.localeCompare(b.name));
    }
    this.nameAscending = !this.nameAscending;
    this.currentSortParameter = SortParameter.NAME;
  }

  sortByAlias(): void {
    if (this.aliasAscending) {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((a, b) => a.aliases[0].localeCompare(b.aliases[0]));
    } else {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((b, a) => a.aliases[0].localeCompare(b.aliases[0]));
    }
    this.aliasAscending = !this.aliasAscending;
    this.currentSortParameter = SortParameter.ALIAS;
  }

  sortByHouse(): void {
    if (this.houseAscending) {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((a, b) => a.houses[0].localeCompare(b.houses[0]));
    } else {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((b, a) => a.houses[0].localeCompare(b.houses[0]));
    }
    this.houseAscending = !this.houseAscending;
    this.currentSortParameter = SortParameter.HOUSE;
  }

  sortByCulture(): void {
    if (this.cultureAscending) {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((a, b) => a.culture.localeCompare(b.culture));
    } else {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((b, a) => a.culture.localeCompare(b.culture));
    }
    this.cultureAscending = !this.cultureAscending;
    this.currentSortParameter = SortParameter.CULTURE;
  }

  sortByActor(): void {
    if (this.actorAscending) {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((a, b) => a.actors[0].localeCompare(b.actors[0]));
    } else {
      this.charactersPreviewsFiltered = this.charactersPreviewsFiltered.sort((b, a) => a.actors[0].localeCompare(b.actors[0]));
    }
    this.actorAscending = !this.actorAscending;
    this.currentSortParameter = SortParameter.ACTOR;
  }
}

