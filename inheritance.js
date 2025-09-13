class vehicle{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    moveBy(){
    console.log('I trave by bus for all time Dhaka to Feni.');
    }
}
const car=new vehicle('Toyota', 120000);
console.log(car);
car.moveBy();


class Bus extends vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat=seat;
        this.ticketPrice=ticketPrice;
    }
}

class truck extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load=load;
    }
}