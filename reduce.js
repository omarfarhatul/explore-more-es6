const nums=[5, 7, 3, 4, 1, 6];
const total = nums.reduce((previous, current) => previous+current, 0);
console.log(total);

const sum=nums.reduce((p, c) => p+c, 0);
console.log(sum);