export interface ILoyaltyProgram {
    id?: number,
    userId: number,
    programName: EProgramName,
    promotion: number,
    promotionCode: string
}

export enum EProgramName {
    Basic,
    Argent,
    Or,
    Platine
}
