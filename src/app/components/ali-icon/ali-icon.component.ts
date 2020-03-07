import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ali-icon',
  templateUrl: './ali-icon.component.html',
  styleUrls: ['./ali-icon.component.css']
})
export class AliIconComponent implements OnInit {
  @Input() theme: 'dark' | 'light';
  @Input() type: 'close' | 'search' | 'class';

  constructor() { }

  ngOnInit(): void {
  }

}
