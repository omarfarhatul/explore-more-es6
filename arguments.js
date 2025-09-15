// arguments array like object
// create by array

function sum(a, b, c){
    const args=[...arguments];
    console.log(args);
    const result=a+b+c;
    return result;
}
const total=sum(3, 6, 2, 8, 1);
console.log(total);
console.log(sum.length);