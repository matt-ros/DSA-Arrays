function maxSum(array) {
  let max = array[0] + array[1];
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let k = i + 1; k < array.length; k++) {
      sum += array[k];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

console.log(maxSum([4,6,-3,5,-2,1]));