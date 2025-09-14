/* // 8 ways to get undefine
 */

// 1. variable that is not initialized will give undefined
let first;
console.log(first);

// 2. function with no return
function second(a, b){
    const total=a+b;
}
const result=second();
console.log(result);

// 3. papameter that is not passed will be undefined
function third(a, b, c, d){
    const total=a+b+c+d;
    console.log(a, b, c, d);
}
third(2, 5);

// 4. 
function noNegative(a, b){
    if(a<0 || b>0){
        return;
    }
    return a+b;
}
const total=noNegative(-5, 3);
console.log(total);