import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc: string;
  isImageLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile($event): void {
    if ($event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL($event.target.files[0]);
      reader.onload = (e: any) => this.imageSrc = e.target.result;
    }
    this.isImageLoaded = true;
  }

}
