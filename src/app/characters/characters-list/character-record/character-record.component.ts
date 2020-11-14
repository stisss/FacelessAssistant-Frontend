import { Component, Input, OnInit } from '@angular/core';
import { CharacterPreview } from '../../models/character-preview.model';

@Component({
  selector: 'app-character-record',
  templateUrl: './character-record.component.html',
  styleUrls: ['./character-record.component.scss']
})
export class CharacterRecordComponent implements OnInit {
  @Input() characterPreview: CharacterPreview;

  constructor() { }

  ngOnInit(): void {
  }

}
