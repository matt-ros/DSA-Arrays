function urlify(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    string.charAt(i) === ' ' ? output += '%20' : output += string.charAt(i);
  }
  return output;
}

console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));