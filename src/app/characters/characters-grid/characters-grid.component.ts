import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { CharacterPreview } from '../models/character-preview.model';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.scss']
})
export class CharactersGridComponent implements OnInit {
  charactersPreviews: Array<CharacterPreview>;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharactersPreviews();
  }

  loadCharactersPreviews(): void {
    this.charactersService.getCharactersPreviews().subscribe(res => {
      console.log(res[0][0])
      this.charactersPreviews = res.map(x => new CharacterPreview(x));
    });
  }

}
