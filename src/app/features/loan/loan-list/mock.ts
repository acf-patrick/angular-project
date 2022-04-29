import LoanModel from '../../../@shared/models/loan';

const mockDatas: LoanModel[] = [
  {
    client: 'RAKOTONDRAINIBE Nirisoa Tendry',
    amount: 500000,
    createdAt: new Date('2022-01-12'),
    endDate: new Date('2022-07-01'),
    interest: 20000,
    percentage: 3,
    paymentMode: 'Mobile Money',
  },
  {
    client: 'RANDRIAMANANTENA Manitra Luc',
    amount: 800000,
    createdAt: new Date('2021-12-04'),
    endDate: new Date('2022-06-01'),
    interest: 30000,
    percentage: 2,
    paymentMode: 'PayPal',
  },
  {
    client: 'ANDRIANANTOANDRO Ny Anjasoa Elifaza',
    amount: 1200000,
    createdAt: new Date('2021-05-27'),
    endDate: new Date('2022-12-01'),
    interest: 50000,
    percentage: 3,
    paymentMode: 'VISA',
  },
  {
    client: 'RAMAROZATOVOMAMPIONONA Tahina Mahatoky',
    amount: 600000,
    createdAt: new Date('2022-04-15'),
    endDate: new Date('2022-10-01'),
    interest: 10000,
    percentage: 1,
    paymentMode: 'PayPal',
  },
  {
    client: 'MIHARISOA Tojoniaina Patrick',
    amount: 300000,
    createdAt: new Date('2022-04-28'),
    endDate: new Date('2022-09-01'),
    interest: 10000,
    percentage: 2,
    paymentMode: 'Mobile Money',
  },
];

// even more mock datas
for (let i = 0; i < 30; ++i)
  mockDatas.push({
    client: "MIHARISOA Tojoniaina Patrick",
    amount: i,
    createdAt: new Date(i),
    endDate: new Date(i),
    interest: i,
    percentage: i,
    paymentMode: String(i),
  });

export default mockDatas;
