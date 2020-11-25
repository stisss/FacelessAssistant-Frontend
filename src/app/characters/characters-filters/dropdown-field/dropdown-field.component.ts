import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit, OnDestroy {
  @Input() placeholder: string;
  @Input() items: Array<string>;
  selectedItems: Array<string>;
  // @Input() events: Subject<void>;
  @Output() selectedItemsChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  private subscription$: Subscription;
  selectedOverview: string;
  overflow: number;

  constructor() { }

  ngOnInit(): void {
    // this.subscription$ = this.events.subscribe(() => this.resetComponent());
    this.selectedItems = new Array<string>();
  }

  onItemClick(item: string): void {
    if (this.selectedItems.includes(item)) {
      this.selectedItems = this.selectedItems.filter(x => x !== item);
    } else {
      this.selectedItems.push(item);
    }

    this.updateOverview();
    this.onFilterChange();
  }

  onDeselectAll(): void {
    this.resetComponent();
    this.updateOverview();
    this.onFilterChange();
  }

  updateOverview(): void {
    if (this.selectedItems && this.selectedItems.length > 0) {
      this.selectedOverview = this.selectedItems[0];
      if (this.selectedItems.length > 1) {
        this.overflow = this.selectedItems.length - 1;
      } else {
        this.overflow = null;
      }
    }
    this.items.sort();
  }

  onFilterChange() {
    if (this.selectedItems.length === 0) {
      this.selectedItemsChange.emit(this.items);
    } else {
      this.selectedItemsChange.emit(this.selectedItems);
    }
  }

  resetComponent(): void {
    this.selectedItems = new Array<string>();
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
