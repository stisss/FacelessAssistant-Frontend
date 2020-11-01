import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecognitionDto } from './home/models/recognitionDto.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly url: string = 'http://localhost:5000/Recognition';

  constructor(private http: HttpClient) { }

  identifyCharacter(image: string): Observable<Array<RecognitionDto>> {
    return this.http.post(this.url, JSON.stringify(image))
    .pipe(map((res: Array<string>) => res.map(x => JSON.parse(x)))) as Observable<Array<RecognitionDto>>;
  }
}
