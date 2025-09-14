// always use ===
// equal conparison doesn't work for non-primitive 

const n1=4;
const n2='4';
if(n1===n2){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// type conversion/casting
const first=[3, 5, 7];
const second=[3, 5, 7];
if(first===second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}