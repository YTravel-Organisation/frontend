export interface IEvent {
    id?: number,
    hotelId: number,
    name: string,
    description: string,
    price: number,
    eventTypes: [string],
    longitude: number,
    latitude: number,
    maxCapacity: number,
    organizerName: string,
    startDate: string,
    endDate: string
}
