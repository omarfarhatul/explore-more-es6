let n1=4; 
let n2=6;
function multiply(a, b){
    a=9;
    const result=a*b;
    return result;
}
console.log(n1);
const output=multiply(n1, n2);
console.log(output);


let student1={name: 'Jalal', partner: 'Mim'};
let student2={name: 'Robi', partner: 'Mariya'};
function makeMovie(couple1, couple2){
    couple1.name='Jolil';
    couple2.partner='Riya';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);