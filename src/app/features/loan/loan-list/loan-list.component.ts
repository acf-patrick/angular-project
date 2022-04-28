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

  constructor() {}

  ngOnInit(): void {
    // retrieve mock data
    // Use service and Observable in the future!
    this.datas = mockDatas;
  }

  originalOrder(a: any, b: any) {
    return 0;
  }
}
