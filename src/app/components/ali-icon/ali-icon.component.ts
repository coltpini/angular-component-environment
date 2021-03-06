import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  HostBinding
} from '@angular/core';
import { Icon, getIcon } from './icons';

@Component({
  selector: 'ali-icon',
  templateUrl: './ali-icon.component.html',
  styleUrls: ['./ali-icon.component.css']
})
export class AliIconComponent implements OnChanges {
  @HostBinding('attr.theme') private attrTheme = 'light';

  @Input() theme: 'dark' | 'light';
  @Input() type: 'close' | 'search' | 'class';

  viewbox: string;
  icon: Icon;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      this.icon = getIcon(changes.type.currentValue);
      this.viewbox = `0 0 ${this.icon.width} ${this.icon.height}`;
    }
    if (changes.theme) {
      this.attrTheme = changes.theme.currentValue;
    }
  }

}
