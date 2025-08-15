function isSum(num1,num2) {
    let sum=num1+num2;
    return sum;

    
}
//const result1=isSum(2,3);
// console.log(result1);

function isMul(num1,num2) {
    let mul=num1*num2;
    return mul;

    
}
//const result2=isMul(2,3);
// console.log(result2);


let a=2;
let b=3;


let r=isSum(a,b)+isMul(a,b);
console.log(r);