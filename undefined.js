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


// 4. if return has nothing on the right side will return undefined
function noNegative(a, b){
    if(a<0 || b>0){
        return;
    }
    return a+b;
}
const total=noNegative(-5, 3);
console.log(total);


// 5. property that doesn't exitsts on an object will give you undefined
const fifth={id: 3, name: 'Hossain', age: 45};
console.log(fifth.age, fifth.salary);


// 6. accessing array elements outside of the index range
const sixth=[4, 6, 22, 7, 12, 25];
console.log(sixth[1], sixth[5], sixth[6], sixth[11]);


// 7. deleting an element inside an array
const seventh=[4, 6, 22, 7, 12, 25];
// you should no do it
delete seventh[1];
console.log(seventh[1], seventh[5], seventh[6], seventh[11]);
console.log(seventh);


// 8. set a value directly to undefined
const eighth=undefined;
console.log(typeof undefined);

const nineth=null;
console.log(typeof null);

const data={results: [], updated: null}
console.log(typeof undefined);
