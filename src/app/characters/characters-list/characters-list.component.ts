import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/dialogs/dialog.service';
import { CharactersService } from '../characters.service';
import { CharacterPreview } from '../models/character-preview.model';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  charactersPreviews: Array<CharacterPreview>;
  nameAscending: boolean = false;
  aliasAscending: boolean = false;
  houseAscending: boolean = false;
  cultureAscending: boolean = false;
  actorAscending: boolean = false;

  constructor(private charactersService: CharactersService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.loadCharactersPreviews();
  }

  loadCharactersPreviews(): void {
    this.charactersService.getCharactersPreviews().subscribe(res => {
      this.charactersPreviews = res.map(x => new CharacterPreview(x));
    });
  }

  onItemClick(character: CharacterPreview): void {
    this.dialogService.showCharacterPreviewDialog(character);
  }

  sortByName(): void {
    if (this.nameAscending) {
      this.charactersPreviews = this.charactersPreviews.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.charactersPreviews = this.charactersPreviews.sort((b, a) => a.name.localeCompare(b.name));
    }
    this.nameAscending = !this.nameAscending;
  }

  sortByAlias(): void {
    if (this.aliasAscending) {
      this.charactersPreviews = this.charactersPreviews.sort((a, b) => a.aliases[0].localeCompare(b.aliases[0]));
    } else {
      this.charactersPreviews = this.charactersPreviews.sort((b, a) => a.aliases[0].localeCompare(b.aliases[0]));
    }
    this.aliasAscending = !this.aliasAscending;
  }

  sortByHouse(): void {
    if (this.houseAscending) {
      this.charactersPreviews = this.charactersPreviews.sort((a, b) => a.houses[0].localeCompare(b.houses[0]));
    } else {
      this.charactersPreviews = this.charactersPreviews.sort((b, a) => a.houses[0].localeCompare(b.houses[0]));
    }
    this.houseAscending = !this.houseAscending;
  }

  sortByCulture(): void {
    if (this.cultureAscending) {
      this.charactersPreviews = this.charactersPreviews.sort((a, b) => a.culture.localeCompare(b.culture));
    } else {
      this.charactersPreviews = this.charactersPreviews.sort((b, a) => a.culture.localeCompare(b.culture));
    }
    this.cultureAscending = !this.cultureAscending;
  }

  sortByActor(): void {
    if (this.actorAscending) {
      this.charactersPreviews = this.charactersPreviews.sort((a, b) => a.actors[0].localeCompare(b.actors[0]));
    } else {
      this.charactersPreviews = this.charactersPreviews.sort((b, a) => a.actors[0].localeCompare(b.actors[0]));
    }
    this.actorAscending = !this.actorAscending;
  }
}

