import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'ali-pill',
  templateUrl: './ali-pill.component.html',
  styleUrls: ['./ali-pill.component.css']
})

export class AliPillComponent implements OnChanges {
  @HostBinding('attr.theme') private attrTheme = 'dark';

  @Input() theme: 'light' | 'dark';
  @Input() value: string;

  @Output() remove = new EventEmitter<string>();

  iconTheme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.theme) {
      this.iconTheme = changes.theme.currentValue === 'light' ? 'dark' : 'light';
      this.attrTheme = changes.theme.currentValue;
    }
  }

  handleRemove() {
    this.remove.emit(this.value);
  }
}
