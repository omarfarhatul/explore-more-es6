const products = [
    {id: 1, name: 'lenovo laptop', price: 65000},
    {id: 2, name: 'mac laptop', price: 165000},
    {id: 3, name: 'Hp laptop', price: 75000},
    {id: 4, name: 'Acer laptop', price: 45000}
]

// has some properties, method
class product{
    country='Bangladesh';
    constructor(name){
        this.name=name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`)
    }
}

const lenovo=new product('Laptop');
console.log(lenovo);
lenovo.speak('How are you?');


class teacher{
    constructor(name, subject){
        this.name=name;
        this.subject=subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}
const RKsir=new teacher('RK sir', 'English');
console.log(RKsir);

const Rashidsir=new teacher('Rashid sir', 'Math');
console.log(Rashidsir);