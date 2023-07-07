// Given a string, reverse the string
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    let reverseChar = str[i];
    result += reverseChar;
  }

  return result;
}
// Time complexity O(n)
console.log(reverseString('Hi my name is Salman'));

function reverseStr(str) {
  return str.split('').reverse().join('');
}

// Time complexity O(n+n+n) => O(3n)
console.log(reverseStr('Hi my name is Salman'));
