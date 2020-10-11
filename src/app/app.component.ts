import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GotAssistant';
  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    console.log('onFileDropped')
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    console.log("filebrowserhandler")
  }
}
