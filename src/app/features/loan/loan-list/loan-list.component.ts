import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
  entry = 0;

  constructor() {}

  ngOnInit(): void {
    this.getDatas();
    this.pageOnChange(1);
  }

  getDatas() {
    // retrieve mock data
    // Use service and Observable in the future!
    this.datas = [...mockDatas]; // Contains initial value
    return this.datas;
  }

  getEntry() {
    this.entry = Math.min(5, this.datas.length);
    return this.entry;
  }

  // Prevent sort and keep keys order
  originalOrder(a: any, b: any): number {
    return 0;
  }

  pageCount() {
    this.checkBound();
    return Math.floor(this.datas.length / this.entry);
  }

  checkBound() {
    if (this.entry > this.datas.length) this.entry = this.datas.length;
  }

  pageOnChange(page: number) {
    this.checkBound();
    this.getEntry();
    const start = (page - 1) * this.entry;
    this.list = this.datas.slice(start, start + this.entry);
  }

  filter() {
    const input = <HTMLInputElement>document.getElementById('loan-search');
    const value = input.value;

    if (value)
      this.datas = this.getDatas().filter((obj) =>
        obj.client.toLowerCase().includes(value.toLowerCase())
      );
    else this.getDatas();
    this.pageOnChange(1);
  }
}
