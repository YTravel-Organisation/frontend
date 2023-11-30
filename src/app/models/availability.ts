export interface IAvailability {
    id?: number,
    roomId: number,
    reservationId: number,
    startDate: string,
    endDate: string,
    status: EAvailabilityStatus,
    createdAt: string
}

export enum EAvailabilityStatus {
    Reservé,
    Annulé,
    En_Cours,
    A_Validé
}
