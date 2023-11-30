export interface IPropertyAmenity {
    id?: number,
    roomId: number,
    kitchen: boolean,
    bathroom: number,
    bed: [string],
    communication: [string],
    accessible: boolean,
    balcoon: boolean,
    parking: boolean,
    locality: [string],
    other: [string]
}
