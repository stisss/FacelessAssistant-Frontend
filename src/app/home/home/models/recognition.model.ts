import { RecognitionDto } from './recognitionDto.model';

export class Recognition {
  name: string;
  aliases: Array<string>;
  description: string;
  actors: Array<string>;
  houses: Array<string>;
  culture: string;
  image: string;

  constructor(dto: RecognitionDto) {
    this.name = dto.name;
    this.aliases = dto.aliases;
    this.description = dto.description;
    this.actors = dto.actors;
    this.houses = dto.houses;
    this.culture = dto.culture;
    this.image = dto.image;
  }
}