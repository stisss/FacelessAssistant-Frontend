import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lookup-field',
  templateUrl: './lookup-field.component.html',
  styleUrls: ['./lookup-field.component.scss']
})
export class LookupFieldComponent implements OnInit {
  @Input() placeholder: string;
  @Input() items: Array<string>;
  selectedItem: string;
  filteredItems: Array<string>;
  @Output() selectedItemChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  updateList(phrase: string): void {
    if (phrase && phrase.length > 0) {
      const regexp = new RegExp(phrase, 'i');
      this.filteredItems = this.items.filter(item => regexp.test(item));
    } else {
      this.filteredItems = this.items;
    }
  }

  onItemSelect(item: string): void {
    if (this.selectedItem !== item) {
      this.selectedItem = item;
      this.updateList(item);
    } else {
      this.selectedItem = null;
      this.updateList('');
    }
    this.selectedItemChange.emit(this.selectedItem);
  }

  onEnter(phrase: string): void {
    if (phrase && phrase.length > 0 && this.filteredItems.length > 0) {
      this.onItemSelect(this.filteredItems[0]);
    }
  }
}
