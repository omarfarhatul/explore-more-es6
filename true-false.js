// any bolean true or false is equal
const y=false;
if(y){
    console.log('value of y is truth');
}
else{
    console.log('value of y is false');
}

// any positive and negative number is truth
const x=-3;
if(x){
    console.log('value of x is truth');
}
else{
    console.log('value of x is false');
}


// but 0 is always false
const z=0;
if(z){
    console.log('value of z is truth');
}
else{
    console.log('value of z is false');
}


// any string, object, array is true and empty string is false
const a='';
if(a){
    console.log('value of a is truth');
}
else{
    console.log('value of a is false');
}

// optional: check false
const b='';
if(!b){
    console.log('value is false');
}