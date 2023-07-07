// Given 2 arrays, Check if any element is present in the opposite array,
// If it is, then the result would be true otherwise return false
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'c', 'm'];

function hasElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let firstEl = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      let secondEl = arr2[j];

      if (firstEl === secondEl) {
        return true;
      }
    }
  }

  return false;
}

// Time complexity O(a*b) => O(n^2)
console.log(hasElement(array1, array2));

// More readable code
function hasCommonEl(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

// Time complexity BigO of O(n*n) => O(n^2)
const res = hasCommonEl(array1, array2);
console.log(res);
