import { PaymentMethod } from "./payment-method";
import { Responsible } from "./responsible";
// import { Client } from "./client";
import { Loan } from "./loan";

export interface Adapter {
    responsibles: Responsible[];
    // clients: Client[];
    paymentsMethods: PaymentMethod[];
    loan: Loan[];
}