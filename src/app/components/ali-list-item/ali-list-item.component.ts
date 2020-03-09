import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'ali-list-item',
  templateUrl: './ali-list-item.component.html',
  styleUrls: ['./ali-list-item.component.css']
})

export class AliListItemComponent {
  @Input() value: string;
  @Input() active = false;
  constructor() { }

}
