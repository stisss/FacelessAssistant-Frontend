import { Component, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  readonly logoSrc = Constants.FACELESS_LOGO_SRC;

  constructor() { }

  ngOnInit(): void {
  }

}
