import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostBinding, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ali-multiselect',
  templateUrl: './ali-multiselect.component.html',
  styleUrls: ['./ali-multiselect.component.css']
})

export class AliMultiselectComponent implements OnChanges {
  @ViewChild('input') input: ElementRef;
  @Input() value: string[] = [];
  @Input() options: string[] = [];
  @Input() label: string;
  @Input() placeholder: string;

  @Output() change = new EventEmitter<string[]>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

  focusInput() {
    this.input.nativeElement.focus();
  }
  cancelFocus(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  handleRemove(value) {
    const temp = this.value;
    const i = temp.findIndex(val => val === value);
    temp.splice(i, 1);
    this.value = [...temp];
    this.handleChange();
  }

  handleAdd(value) {
    if (this.value.findIndex(val => val === value) === -1) {
      this.value.push(value);
      this.handleChange();
    }
  }

  handleChange() {
    this.change.emit(this.value);
  }
}
