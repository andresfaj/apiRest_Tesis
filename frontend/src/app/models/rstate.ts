export class RealState {

    _id: string;
    // originalname: string;
    // filename: string;
    // path: string;
    // mimetype: string;
    // size: string;
    typeProperty: string;
    typeOffer: string;
    price: number;
    negotiable: boolean;
    incluAdmin: boolean;
    adminValue: number;
    department: string;
    city: string;
    neighborhood: string;
    address: string;
    area: number;
    antiquity: number;
    rooms: number;
    bathrooms: number;
    apartmentFloor: number;
    parking: number;
    description: string;
    interior: {
        aircondi: boolean;
        jacuzzi: boolean;
        fwood: boolean;
        cfloor: boolean;
        ikitchen: boolean;
        akitchen: boolean;
    };
    exterior: {
        pool: boolean;
        ccondominium: boolean;
        pvisitors: boolean;
    };
    careas: {
        cliving: boolean;
        fcourt: boolean;
        bcourt: boolean;
        tcourt: boolean;
        greenery: boolean;
        chareas: boolean;
    };
    sector: {
        schoolnear: boolean;
        unear: boolean;
        smarkets: boolean;
        parks: boolean;
        malls: boolean;
        ptransport: boolean;
        czone: boolean;

    };
    user: string;
    disabled: boolean;

    constructor(_id = '', typeProperty = '', typeOffer = '', price = 0, negotiable = false, incluAdmin = false, adminValue = 0, department= '', city = '', neighborhood = '', address = '', area = 0, antiquity = 0, rooms = 0, bathrooms = 0, apartmentFloor = 0, parking = 0, description = '', interior = {aircondi: false, jacuzzi: false, fwood: false, cfloor: false, ikitchen: false, akitchen: false }, exterior = {pool: false, ccondominium:false, pvisitors:false}, careas = {cliving:false, fcourt:false, bcourt:false, tcourt:false, greenery:false, chareas:false}, sector = {schoolnear:false, unear:false, smarkets:false, parks:false, malls:false, ptransport:false, czone:false}, user = '', disabled = true){
        this._id = _id;
        this.typeProperty = typeProperty;
        this.typeOffer = typeOffer;
        this.price = price;
        this.negotiable = negotiable;
        this.incluAdmin = incluAdmin;
        this.adminValue = adminValue;
        this.department = department;
        this.city = city;
        this.neighborhood = neighborhood;
        this.address = address;
        this.area = area;
        this.antiquity = antiquity;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this,apartmentFloor = apartmentFloor;
        this.parking = parking;
        this.description = description;
        this.interior = interior;
        this.exterior = exterior;
        this.careas = careas;
        this.sector = sector;
        this.user = user;
        this.disabled = disabled;
    }
}