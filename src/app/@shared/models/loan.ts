export default interface LoanModel {
  client: String;
  amount: Number;
  createdAt: Date;
  endDate: Date;
  interest: Number;
  percentage: Number;
  paymentMode: String; // Review
}
