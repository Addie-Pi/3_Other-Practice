// to find the odd, unpaired number in the given array
// [9, 3, 9, 3, 9, 7, 9] shall return 3

let testData1 = [9, 3, 9, 3, 9, 7, 9];
let testData2 = [2, 3, 1, 2, 3];
let testData3 = [4, 2, 8, 2, 8, 5, 5, 7, 4];

function solution(A) {
    let stack = new Object();
    let stackKeys = "";
    let result = 0;

    for(let i = 0; i < A.length; i++){

        // hasOwnProperty is to find if the object already has the key or not
        if(stack.hasOwnProperty(A[i])){
            // if the key already exist, then delete it
            delete stack[A[i]];
        }else{
            // if not, then add it
            stack[A[i]] = 1;
        }
    }

    // find the keys in object because those keys are the numbers we could like to get
    stackKeys = Object.keys(stack);
    // cause all paried key-val had been deleted, so the only remain is our answer which is index = 0
    result = parseInt(stackKeys[0]);
    return result;
}


console.log("testData1 ", solution(testData1));
console.log('testData2 ', solution(testData2));
console.log('testData3 ', solution(testData3));


