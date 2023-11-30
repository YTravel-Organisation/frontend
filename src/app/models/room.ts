export interface IRoom {
    id?: number,
    hotelId: number,
    roomType: ERoomType,
    description: string,
    viewType: string,
    maxOccupancy: number,
    pricePerNight: number,
    options: [string],
    images: [string]
}

export enum ERoomType {
}
