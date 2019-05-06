export class RealState {

    _id: string;
    name: string;
    neighborhood: string;
    description: string;
    password: string;

    constructor(_id = '', name = '', neighborhood = '', description = ''){
        this._id = _id;
        this.name = name;
        this.neighborhood = neighborhood;
        this.description = description;
    }
}