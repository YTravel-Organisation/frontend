export interface ITransport {
    id?: number,
    transportType: ETransportType,
    price: number,
    travelTime: number,
    departure: string,
    arrival: string,
    occupency: number,
    distance: number,
    enterprise: string,
    reservationLink: string,
    startDate: string,
    endDate: string
}

export enum ETransportType {
    Avion,
    Bateau,
    Voiture,
    A_Pied,
    Bus_Car
}
