export class User {

    _id: string;
    name: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;

    constructor(_id = " ", name = " ", lastName = " ", phone = 0, email = " ", password = ''){
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password; 
    }
}
