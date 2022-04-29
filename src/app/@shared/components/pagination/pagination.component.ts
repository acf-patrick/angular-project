import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() count = 0;
  @Output() buttonOnClick = new EventEmitter<number>();
  lastClicked: any = null;
  lastNumClicked = 0;

  constructor() {}

  ngOnInit(): void {}

  emitLastValue(): void {
    this.buttonOnClick.emit(this.lastNumClicked);
  }

  setLastClicked(button: any) {
    if (this.lastClicked === button) return;
    if (this.lastClicked) this.lastClicked.style.outline = 'none';
    this.lastClicked = button;
    button.style.outline = 'solid 5px #5a5ae191';
  }

  // Prev / Next button clicked
  dirOnClick(value: String): void {
    if (value === 'left') {
      if (this.lastNumClicked > 1) this.lastNumClicked--;
      else this.lastNumClicked = this.count;
    } else if (value === 'right') {
      if (this.lastNumClicked < this.count) this.lastNumClicked++;
      else this.lastNumClicked = 1;
    }
    this.setLastClicked(document.querySelector(`#num-${this.lastNumClicked}`));
    this.emitLastValue();
  }

  // Button numbers clicked
  numOnClick(button: any, value: number): void {
    this.setLastClicked(button);
    this.lastNumClicked = value;
    this.emitLastValue();
  }

  // helper : create range of integers
  range(n: Number): Array<Number> {
    return Array(n);
  }

  // helper : create ID for number button
  buttonID(n: Number): String {
    return `num-${n}`;
  }
}
