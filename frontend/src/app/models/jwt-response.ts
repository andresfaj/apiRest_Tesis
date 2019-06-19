export interface JwtResponse {
    dataUser:{
        id: number,
        name: string,
        lastName: string,
        phone: number,
        email: string,
        accessToken: string
    }
}
