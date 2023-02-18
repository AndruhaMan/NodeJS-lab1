// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) => {
  const res = arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0));
  console.log(res);
  return res;
};

// To solve this task I created to separate arrays with zeros only and
// everything else beside zeros by filtering and then simply combined them

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
