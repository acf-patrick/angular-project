import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() count = 0;
  @Output() buttonOnClick = new EventEmitter<Number>();

  constructor() {}

  ngOnInit(): void {}

  range(n: Number): Array<Number> {
    return Array(n);
  }
}
