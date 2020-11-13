import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Recognition } from './models/recognition.model';
import * as x from 'lodash';
import { RecognitionDto } from './models/recognitionDto.model';
import { Constants } from 'src/app/core/shared/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageBase64: string;
  isImageLoaded: boolean = false;
  isImageHorizontal: boolean = false;
  result: Array<Recognition>;
  numberOfDetected: number;
  numberOfRecognized: number;
  readonly characterExampleSrc: string = Constants.CHARACTER_EXAMPLE_SRC;
  readonly logoSrc = Constants.FACELESS_LOGO_SRC;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  uploadFile($event): void {
    this.isImageLoaded = false;
    this.isImageHorizontal = false;

    if ($event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL($event.target.files[0]);

      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        this.isImageHorizontal = img.width > img.height;

        setTimeout(() => {
          this.imageBase64 = e.target.result;
        }, 0);
      };

      this.result = null;
      this.isImageLoaded = true;
    }
  }

  onIdentifyCharacters(): void {
    this.homeService.identifyCharacter(this.imageBase64).subscribe(res => {
      this.result = res.filter((dto: RecognitionDto) => dto.name !== 'Unknown')
        .map((dto: RecognitionDto) => new Recognition(dto));
      this.numberOfDetected = res.length;
      this.numberOfRecognized = this.result.length;
    });
  }

}
