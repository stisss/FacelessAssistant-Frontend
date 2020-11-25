import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from '../core/shared/Constants';
import { CharacterPreviewDto } from './models/character-preview-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharactersPreviews(): Observable<Array<CharacterPreviewDto>> {
    return this.http.get(Constants.LOCAL_BACKEND_URL.concat(Constants.CHARACTERS_POSTFIX))
      .pipe(map((res: Array<string>) => res.map(x => JSON.parse(x)))) as Observable<Array<CharacterPreviewDto>>;
  }

  getNames(): Observable<Array<string>> {
    return this.http.get(Constants.LOCAL_BACKEND_URL.concat(Constants.NAMES_POSTFIX)) as Observable<Array<string>>;
  }

  getCultures(): Observable<Array<string>> {
    return this.http.get(Constants.LOCAL_BACKEND_URL.concat(Constants.CULTURES_POSTFIX)) as Observable<Array<string>>;
  }

  getActors(): Observable<Array<string>> {
    return this.http.get(Constants.LOCAL_BACKEND_URL.concat(Constants.ACTORS_POSTFIX)) as Observable<Array<string>>;
  }

  getHouses(): Observable<Array<string>> {
    return this.http.get(Constants.LOCAL_BACKEND_URL.concat(Constants.HOUSES_POSTFIX)) as Observable<Array<string>>;
  }
}
