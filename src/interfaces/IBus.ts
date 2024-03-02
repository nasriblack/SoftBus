export interface ISeats {
    seat_number:string;
    user_name:string;
    _id:any
}


export interface IBus {
    _id:any;
    BusNum:string;
    NbrOfSeats:number;
    destinations:[string];
    seats: ISeats;
    createdAt:Date;
    updatedAt:Date;
}