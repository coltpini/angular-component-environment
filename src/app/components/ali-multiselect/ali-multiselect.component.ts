import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';

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

  optionsList: string[];
  showResults = false;

  @Output() change = new EventEmitter<string[]>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options) {
      this.optionsList = changes.options.currentValue;
    }
    if (changes.options || changes.value) {
      this.filterOptions();
    }
  }

  filterOptions() {
    let filter;
    if (this.input) {
      filter = this.input.nativeElement.value;
    }
    const list = this.options.filter(option => {
      const l = [];
      if (filter && option.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
        return false;
      }
      return !this.value.reduce((flag, val) => flag || option === val, false);
    });
    this.optionsList = list;
  }

  onBlur(e) {
    // TODO: make it so that blur closes panel
    // this.showResults = false;
  }

  focusInput() {
    this.showResults = true;
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
      this.input.nativeElement.value = '';
      this.handleChange();
    }
  }

  handleChange() {
    this.showResults = false;
    this.filterOptions();
    this.change.emit(this.value);
  }

}
