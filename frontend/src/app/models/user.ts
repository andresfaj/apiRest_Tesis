export class User {

    constructor(_id = '', lastName = '', email = '', password = '', phone = 0){
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.phone = phone;
    }
    _id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: number;
}
