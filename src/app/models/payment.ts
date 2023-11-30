import { EPayment } from "./hotel";

export interface IPayment {
    id?: number,
    userId: number,
    paymentMethod: EPayment,
    multiple?: number,
    amount: number,
    currency: string,
    status: boolean,
    createdAt: string
}
