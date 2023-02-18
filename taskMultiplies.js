//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0

function solution(number) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (!(i % 3) || !(i % 5)) {
      result += i;
    }
  }
  return result;
}

//Algorithm go through the loop and check each number below the given number. If the remainder of division by 3 or 5 is zero, It adds this number to result.

console.log(solution(10)); // Result is 23
