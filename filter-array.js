function filter(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(filter([1,2,3,9,8,7,5,6,4]));