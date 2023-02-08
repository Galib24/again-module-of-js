function sum(i){
    if (i == 1){
        return 1;
    }
    return i + sum(i-1);
}
const result = sum (5)
// console.log(result);


// factorial

function factorial(){
    if(i==1){
        return 1;

    }
    return i + sum(i-1);
}
const results = factorial(5)
/* 
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1s
*/

