import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DialogService } from 'src/app/core/dialogs/dialog.service';
import { CharactersService } from '../characters.service';
import { CharacterPreview } from '../models/character-preview.model';
import { CharactersFilter } from '../models/characters-filter';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.scss']
})
export class CharactersGridComponent implements OnInit, OnDestroy {
  @Input() updateEvent: Subject<CharactersFilter>;
  private subscription$: Subscription;
  charactersPreviews: Array<CharacterPreview>;
  charactersPreviewsFiltered: Array<CharacterPreview>;
  charactersFilter: CharactersFilter;

  constructor(private charactersService: CharactersService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.charactersPreviews = new Array<CharacterPreview>();
    this.loadCharactersPreviews();
    this.subscription$ = this.updateEvent.subscribe(res => {
      this.charactersFilter = res;
      this.charactersPreviewsFiltered = this.charactersPreviews.filter(character =>
        // (this.charactersFilter.name === null || character.name === this.charactersFilter.name)
        // && character.actors.includes(this.charactersFilter.actor)
        this.charactersFilter.houses !== undefined && character.houses.filter(h => this.charactersFilter.houses.includes(h)).length > 0
        && this.charactersFilter.cultures !== undefined && this.charactersFilter.cultures.includes(character.culture)
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

  onTileClick(character: CharacterPreview): void {
    this.dialogService.showCharacterPreviewDialog(character);
  }

}
