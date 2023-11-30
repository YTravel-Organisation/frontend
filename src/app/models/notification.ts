export interface INotification {
    id?: number,
    userId: number,
    type: ENotificationType,
    title: string,
    message: string,
    createdAt: string
}

export enum ENotificationType {
}
