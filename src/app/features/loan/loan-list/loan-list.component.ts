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
    for (let i = 0; i < 30; ++i)
      // more mock datas
      this.datas.push({
        client: String(i),
        amount: i,
        createdAt: new Date(i),
        endDate: new Date(i),
        interest: i,
        percentage: i,
        paymentMode: String(i),
      });
  }

  originalOrder(a: any, b: any): number {
    return 0;
  }

  print(obj: any) {
    console.log(obj);
  }
}
