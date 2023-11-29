export interface IUser {
    id?: number,
    roleId: [number],
    username: string,
    email: string,
    password: string,
    verified: boolean,
    verificationToken: string,
    createdAt: string
}
