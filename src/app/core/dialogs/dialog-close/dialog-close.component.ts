import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-close',
  templateUrl: './dialog-close.component.html',
  styleUrls: ['./dialog-close.component.scss']
})
export class DialogCloseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
