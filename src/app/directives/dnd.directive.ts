import { EventEmitter, Output } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @Output() fileDropped = new EventEmitter<any>();

  constructor() { }

  @HostListener('dragover') onDragOver(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave') public onDragLeave(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop') public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
