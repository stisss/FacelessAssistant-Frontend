import { CharacterPreviewDto } from './character-preview-dto.model';

export class CharacterPreview {
  name: string;
  aliases: Array<string>;
  description: string;
  actors: Array<string>;
  houses: Array<string>;
  culture: string;
  image: string;

  constructor(dto: CharacterPreviewDto) {
    this.name = dto.name;
    this.aliases = dto.aliases;
    this.description = dto.description;
    this.actors = dto.actors;
    this.houses = dto.houses;
    this.culture = dto.culture;
    this.image = dto.image;
  }
}