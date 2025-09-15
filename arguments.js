function sum(a, b, c){
    console.log(arguments);
    const result=a+b+c;
    return result;
}
const total=sum(3, 6, 2, 8, 1);
console.log(total);