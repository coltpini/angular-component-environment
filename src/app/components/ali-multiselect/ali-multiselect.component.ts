import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'ali-multiselect',
  templateUrl: './ali-multiselect.component.html',
  styleUrls: ['./ali-multiselect.component.css']
})

export class AliMultiselectComponent implements OnChanges {
  @Input() value: string[] = [];
  @Input() options: string[] = [];
  @Input() label: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

}
