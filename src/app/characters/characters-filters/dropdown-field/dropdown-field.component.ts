import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {
  @Input() placeholder: string;
  @Input() items: Array<string>;
  @Input() selectedItems: Array<string>;
  @Output() selectedItemsChange: EventEmitter<Array<string>> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
