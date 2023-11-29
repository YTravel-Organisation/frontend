export interface IProfile {
    id?: number,
    userId: number,
    gender: EGender,
    firstName: string,
    lastName: string,
    profileImage: string,
    phone: string,
    addressLine: string,
    state: string,
    city: string,
    postalCode: number,
    country: string,
    dateOfBirth: string,
    lastSearch: [string]
}

export enum EGender {
    Homme,
    Femme,
    Autre
}
