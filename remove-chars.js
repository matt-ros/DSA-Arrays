function removeChars(string, chars) {
  let charsObj = {};
  for (let i = 0; i < chars.length; i++) {
    charsObj[chars.charAt(i).toLowerCase()] = chars;
  }
  let output = '';
  for (let k = 0; k < string.length; k++) {
    if (!charsObj[string.charAt(k).toLowerCase()]) {
      output += string.charAt(k);
    }
  }
  return output;
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));