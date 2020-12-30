const array = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

function arraySearch2d(array) {
  let output = [];
  let arraysWithZeroes = new Set();
  let zeroIndices = new Set();
  array.forEach((subArray, index) => {
    subArray.forEach((entry, entryIndex) => {
      if (entry === 0) {
        arraysWithZeroes.add(index);
        zeroIndices.add(entryIndex);
      }
    });
  });
  const zeroRow = new Array(array[0].length).fill(0);
  const nonZeroRow = new Array(array[0].length).fill(1);
  zeroIndices.forEach(entry => nonZeroRow[entry] = 0);
  for (let i = 0; i < array.length; i++) {
    if (arraysWithZeroes.has(i)) {
      output.push(zeroRow);
    }
    else {
      output.push(nonZeroRow);
    }
  }
  return output;
}

console.log(arraySearch2d(array));