export interface IHotel {
    id?: number,
    adminId: number,
    name: string,
    description: string,
    address: string,
    email: string,
    website: string,
    phone: string,
    rating: number,
    verified: boolean,
    commentsId: [number],
    bannerImage: string,
    suppImage: [string],
    longitude: number,
    latitude: number,
    faq: Object,
    paymentMethod: EPayment,
    otherInformation: string,
    createdAt: string
}

export enum EPayment {
    Paypal,
    CB
}
