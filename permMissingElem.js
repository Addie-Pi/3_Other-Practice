// the goal is to find the missing element in the given array
// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

function solution(A) {
  // because the given array consist of N different integers and the array shall contains 1...N+1 elements]
  // which means, if the lenght of given array is 4 then it shall have 5 elements
  // we could use the sum of array with full elements (1+2+3+4+5) to deduct the sume of given array with partial elements(1+2+missingElement+4+5) to get the answer


  let expectSumOfArr = 0
  let exactSumOfArr = 0
  let result = 0

  for (let i = 1; i <= A.length + 1; i++) {
    expectSumOfArr += i
  }

  for (let i = 0; i < A.length; i++) {
    exactSumOfArr += A[i]
  }

  return (result = expectSumOfArr - exactSumOfArr)
}