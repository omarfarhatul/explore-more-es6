class person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
}
const ali=new person('Ali sahab', 66);
console.log(ali);
ali.sleep();

const khan=new person('Khan sahab', 53);
console.log(khan);
khan.sleep();