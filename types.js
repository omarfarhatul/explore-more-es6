/* 
js is a dynamic type language
*/
// primitive type
const a=5;
const b='How are your?'
const d=true;
// non-primitive type
const ages=[35, 6, 23];
const student={id: 35, class: 7};
console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);


let x=7;
let y=3;
console.log(x, y);
y=8;
console.log(x, y);


let p={job: 'web developer'}
let q=p;
console.log(p, q);
q={job: 'backend developer'}
console.log(p, q);

// refference work. because 1 variable change then change 2 variable
q.job='app developer';
console.log(p, q);