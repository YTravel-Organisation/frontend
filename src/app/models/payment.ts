import { EPayment } from "./hotel";

export interface IPayment {
    id?: number,
    userId: number,
    paymentMethod: EPayment,
    multiple?: boolean,
    amount: number,
    currency: string,
    status: EPaymentStatus,
    createdAt: string
}

export enum EPaymentStatus {
}
