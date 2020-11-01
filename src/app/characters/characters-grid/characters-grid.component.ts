import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/dialogs/dialog.service';
import { CharactersService } from '../characters.service';
import { CharacterPreview } from '../models/character-preview.model';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.scss']
})
export class CharactersGridComponent implements OnInit {
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

  onTileClick(character: CharacterPreview): void {
    this.dialogService.showCharacterPreviewDialog(character);
  }

}
