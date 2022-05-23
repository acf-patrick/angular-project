import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Adapter } from '../models/adapter';
import  mockDatas from '../../features/loan/loan-list/mock';

@Injectable({
  providedIn: 'root'
})
export class LoanService{
  entry: Adapter = {
    responsibles: [
      {
        id: 1,
        firstName: 'Nirisoa Tendry',
        lastName: 'RAKOTONDRAINIBE',
      },
      { id: 2, 
        firstName: 'Manitra Luc', 
        lastName: 'RANDRIAMANANTENA' 
      },
      { id: 3, 
        firstName: 'Ny Anjasoa Elifaza', 
        lastName: 'ANDRIANANTOANDRO' 
      },
      {
        id: 4,
        firstName: 'Tahina Mahatoky',
        lastName: 'RAMAROZATOVOMAMPIONONA',
      },
      { id: 5, firstName: 'Tojoniaina Patrick', lastName: 'MIHARISOA' },
    ],
    // clients: [
    //   {
    //     id:6,
    //     companyName:"Client 1"
    //   },
    //   {
    //     id:7,
    //     companyName:"Client 2"
    //   },
    //   {
    //     id:8,
    //     companyName:"Client 3"
    //   }
    // ],
    paymentsMethods:[
      {
        id:9,
        label:"Par semaine"
      },
      {
        id:10,
        label:"Par mois"
      }, 
      {
        id:11, 
        label:"Trimestrielle"
      },
      {
        id:12,
        label:"Semestrielle"
      }
    ],
    loan:[
      {
        id:13,
        label:"Mvola"
      },
      {
        id:14,
        label:"Orange Money"
      },
      {
        id:15,
        label:"Airtel Money"
      },
      {
        id:16,
        label:"En espéce"
      }
    ]
  }; 

  constructor(public payload: Observable <any>) {}

 getPageCreateData():Observable<any>{
  this.payload = of(this.entry)
  return this.payload
 }
 createLoan(data: {responsible:string, client:string, amount:number, percentage:number, repaymentFrequency:string, loanDate:Date, repaymentEndDate:Date, benefitPaymentMethod:string, capitalPaymentMethod:string, remark:string}): Observable <any>{
  let myObservable = Observable.create((observer:any) => {
    observer.next(data)
    const Temp = {
      client:data.responsible,
      amount: data.amount,
      createdAt: data.loanDate,
      endDate: data.repaymentEndDate,
      percentage: data.percentage,
      interest: (data.amount*data.percentage/100),
      paymentMode: data.capitalPaymentMethod
    }
    mockDatas.unshift(Temp);
  });
  return myObservable; 
  
  // this.payload = of(data, Temp)
 }
}
