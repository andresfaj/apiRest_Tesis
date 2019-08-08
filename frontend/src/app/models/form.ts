export class Form {

    name: string;
    email: string;
    comment: string;

    constructor(name = " ", email = " ", comment = " "){
        this.name = name;
        this.email = email;
        this.comment = comment;
    }
}
