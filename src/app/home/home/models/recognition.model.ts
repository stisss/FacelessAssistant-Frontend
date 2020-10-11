import { RecognitionDto } from './recognitionDto.model';

export class Recognition {
  name: string;
  aliases: Array<string>;
  description: string;
  topLeft: Array<number>;
  bottomRight: Array<number>;

  constructor(dto: RecognitionDto) {
    this.name = dto.name;
    this.aliases = dto.aliases;
    this.description = dto.description;
    this.topLeft = dto.top_left;
    this.bottomRight = dto.bottom_right;
  }
}