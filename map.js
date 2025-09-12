// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [4, 5, 2, 6, 3];

function doubleIt(num){
    console.log('num now', num);
    return num*2;
}
const result = numbers.map(doubleIt);
console.log(result);

// use arrow function
const double2 = n => n*2;
const output =numbers.map(double2);
console.log(output);

// another
const output2=numbers.map(n => n*2);
console.log(output2);

// bonous 5 add
const fiveBonus = numbers.map(num => num+5);
console.log(fiveBonus);

// length ber kora
const friends = ['Tom', 'John', 'RajaSab', 'Badshah'];
const lengths=friends.map(frd => frd.length);
console.log(lengths);
// first string
const firstletter=friends.map(fletter => fletter[2]);
console.log(firstletter);