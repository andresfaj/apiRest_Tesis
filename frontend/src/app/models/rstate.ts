export class RealState {

    _id: string;
    name: string;
    neighborhood: string;
    address: string;
    bathrooms: number;
    bedrooms: number;
    description: string;
    user: string;

    constructor(_id = '', name = '', neighborhood = '', address = '', bathrooms = 0, bedrooms = 0, description = '', user= ''){
        this._id = _id;
        this.name = name;
        this.neighborhood = neighborhood;
        this.address = address;
        this.bathrooms = bathrooms;
        this.bedrooms = bedrooms;
        this.description = description;
        this.user = user;
    }
}