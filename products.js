function products(array) {
  let output = [];
  let totalProduct = array.reduce((acc, currVal) => acc *= currVal);
  for (let i = 0; i < array.length; i++) {
    output.push(totalProduct / array[i]);
  }
  if (totalProduct === 0) {
    const zeroIndex = array.indexOf(0);
    let nonZeroProduct = 1;
    for (let k = 0; k < array.length; k++) {
      if (k === zeroIndex) {
        continue;
      }
      nonZeroProduct *= array[k];
    }
    output[zeroIndex] = nonZeroProduct;
  }
  return output;
}

console.log(products([1,0,3,9,4]));