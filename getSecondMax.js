const getSecondMax = (arr) => {
  let max = 0;
  let secondMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) secondMax = arr[i];
  }
  return secondMax;
};

const getSecondMax2 = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
};

console.log(getSecondMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getSecondMax2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
