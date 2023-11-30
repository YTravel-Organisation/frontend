export interface IComment {
    id?: number,
    userId: number,
    roomId?: number,
    hotelId?: number,
    eventId?: number,
    message: string,
    rate: number,
    status: boolean,
    createdAt: string
}
