function stringRotation(str1, str2) {
  let str1Array = str1.split('');
  for (let i = 0; i < str1.length; i++) {
    str1Array.push(str1Array.shift());
    if (str1Array.join('') === str2) {
      return true;
    }
  }
  return false;
}

console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));