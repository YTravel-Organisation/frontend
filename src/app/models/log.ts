export interface ILog {
    id?: number,
    timestamp: string,
    userId: number,
    eventType: EEventType,
    description: string,
    severity: number,
    ipAddress: string,
    userAgent: string,
    endpoint: string,
    additionalDate: string
}

export enum EEventType {
    Warning,
    Error,
    Success
}
