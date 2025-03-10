import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CoreModule } from '../core/core.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersFiltersComponent } from './characters-filters/characters-filters.component';
import { CharactersGridComponent } from './characters-grid/characters-grid.component';
import { CharacterTileComponent } from './characters-grid/character-tile/character-tile.component';
import { CharacterRecordComponent } from './characters-list/character-record/character-record.component';
import { LookupFieldComponent } from './characters-filters/lookup-field/lookup-field.component';
import { DropdownFieldComponent } from './characters-filters/dropdown-field/dropdown-field.component';


@NgModule({
  declarations: [CharactersComponent, CharactersListComponent, CharactersFiltersComponent, CharactersGridComponent, CharacterTileComponent, CharacterRecordComponent, LookupFieldComponent, DropdownFieldComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CoreModule
  ]
})
export class CharactersModule { }
