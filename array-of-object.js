const products = [
    {id: 1, name: 'lenovo', price: 35000},
    {id: 2, name: 'dell', price: 55000},
    {id: 3, name: 'mac', price: 135000},
]
// map
const names=products.map(product => product.name);
console.log(names);
const price=products.map(p => p.price);
console.log(price);

// forEach
products.forEach(p=> console.log(p.id));

// filter
const expensive=products.filter(p=>p.price>70000);
console.log(expensive);

// find
const affordable = products.find(p=>p.price<50000);
console.log(affordable);

// reduce
const total=products.reduce((acum, current) => acum+current.price, 0);
console.log(total);