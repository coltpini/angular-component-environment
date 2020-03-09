import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'ali-revealing-panel',
  templateUrl: './ali-revealing-panel.component.html',
  styleUrls: ['./ali-revealing-panel.component.css']
})

export class AliRevealingPanelComponent implements OnChanges {
  @HostBinding('attr.fill') private attrFill = undefined;
  @HostBinding('attr.aria-expanded') private attrExpanded = undefined;
  @HostBinding('attr.trim-border') private attrTrim = undefined;

  @Input() position: 'top' | 'left' | 'bottom' | 'right' = 'top';
  @Input() fill = false;
  @Input() expanded = false;
  @Input() trim = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fill) {
      this.attrFill = changes.fill.currentValue;
    }
    if (changes.expanded) {
      this.attrExpanded = changes.expanded.currentValue;
    }
    if (changes.trim) {
      this.attrTrim = changes.trim.currentValue;
    }
  }

}
