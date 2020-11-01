import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterPreviewDto } from './models/character-preview-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  readonly url: string = 'http://localhost:5000/Characters';

  constructor(private http: HttpClient) { }

  getCharactersPreviews(): Observable<Array<CharacterPreviewDto>> {
    return this.http.get(this.url).pipe(map((res: Array<string>) => res.map(x => JSON.parse(x)))) as Observable<Array<CharacterPreviewDto>>;
  }
}
