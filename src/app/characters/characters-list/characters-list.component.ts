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
}
