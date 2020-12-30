function mergeArrays(array1, array2) {
  let index1 = 0;
  let index2 = 0;
  let output = [];
  while (index1 < array1.length || index2 < array2.length) {
    if (array1[index1] <= array2[index2] || index2 === array2.length) {
      output.push(array1[index1]);
      index1++;
      continue;
    }
    if (array2[index2] <= array1[index1] || index1 === array1.length) {
      output.push(array2[index2]);
      index2++;
      continue;
    }
  }
  return output;
}

console.log(mergeArrays([1,3,6,8,11], [2,3,5,8,9,10]));