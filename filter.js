// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition

const nums=[1, 6, 3, 7, 2, 5];
const players = [45, 75, 56, 74, 67];
const selected = players.filter(p =>p > 60);
console.log(selected);
const selected2 = players.filter(p =>p > 80);
console.log(selected2);

// odd number of height
const selected3=players.filter(p => p%2===1);
console.log(selected3);
