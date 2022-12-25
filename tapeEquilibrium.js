/*
A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: 
A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
The difference between the two parts is the value of: 
|(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
*/


let testA = [2, 4, 5, 3, 13, 6, 9, 1];
let testB = [6, 9];
let testC = [234,63, 8, 9, 4, 13, 435];

function solution(A){
    let sumRight = A.reduce((accum, current)=>{
      return accum + current;  
    }, 0)

    let sumLeft = 0;
    let result = null;

    for(let i = 0; i < A.length-1; i++){
        sumRight -= A[i];
        sumLeft += A[i];
        
        let different = Math.abs(sumLeft - sumRight);

        if(result == null || result > different){
            result = different;
        }
    }

    return result;

}


console.log('testA: ', solution(testA))
console.log('testB: ', solution(testB))
console.log('testC: ', solution(testC))