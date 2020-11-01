import { Component, Input, OnInit } from '@angular/core';
import { CharacterPreview } from '../../models/character-preview.model';

@Component({
  selector: 'app-character-tile',
  templateUrl: './character-tile.component.html',
  styleUrls: ['./character-tile.component.scss']
})
export class CharacterTileComponent implements OnInit {
  @Input() characterPreview: CharacterPreview;
  exampleImageUrl: string = 'https://firebasestorage.googleapis.com/v0/b/facelessassistant.appspot.com/o/2020-10-26_213005.png?alt=media&token=bf4d81c6-e673-4307-8918-2f3501b052e6';

  constructor() { }

  ngOnInit(): void {
  }

}
