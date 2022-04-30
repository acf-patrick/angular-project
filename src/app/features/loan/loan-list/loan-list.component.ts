import { Component, OnInit } from '@angular/core';
import LoanModel from 'src/app/@shared/models/loan';
import mockDatas from './mock';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],
})
export class LoanListComponent implements OnInit {
  datas!: LoanModel[];
  list!: LoanModel[];
  count = 3;

  constructor() {}

  ngOnInit(): void {
    // retrieve mock data
    // Use service and Observable in the future!
    this.datas = [...mockDatas]; // Contains initial value

    this.pageOnChange(1);
  }

  // Prevent sort and keep keys order
  originalOrder(a: any, b: any): number {
    return 0;
  }

  pageCount() {
    return Math.floor(this.datas.length / this.count);
  }

  pageOnChange(page: number) {
    const start = (page - 1) * this.count;
    this.list = this.datas.slice(start, start + this.count);
  }
}
