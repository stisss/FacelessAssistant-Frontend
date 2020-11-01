import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterPreview } from 'src/app/characters/models/character-preview.model';
import { DialogCloseComponent } from './dialog-close/dialog-close.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  showCharacterPreviewDialog(character: CharacterPreview): void {
    this.dialog.open(DialogCloseComponent, {
      disableClose: false,
      data: {
        character
      }
    });
  }
}
