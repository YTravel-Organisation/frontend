export interface IReservation {
    id?: number,
    bookingType: EBookingType,
    userId: number,
    paymentId: number,
    roomId?: number,
    eventId?: number,
    transportId?: number,
    startDate: string,
    endDate: string,
    reservationStatus: EReservationStatus,
    specialRequest: string,
    uniqueBookingCode: string,
    internalNotes: string,
    createdAt: string,
}

export enum EBookingType {
}

export enum EReservationStatus {
}
