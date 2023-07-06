// Given 2 arrays, Check if any element is present in the opposite array,
// If it is, then the result would be true otherwise return false
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'm'];

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

console.log(hasElement(array1, array2));

// Time complexity O(a*b) => O(n^2)

// First loop over the arr1 make a object of the properties === keys
// Then loop over the arr2 and check if the newly created object has that properties
// If yes, then return true else return false

function hasCommonElement(arr1, arr2) {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    let el = arr1[i];
    obj[el] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    let arr2El = arr2[j];
    if (obj[arr2El]) return true;
    else continue;
  }

  return false;
}

const result = hasCommonElement(array1, array2);
console.log(result);

// Time complexity BigO of O(a+b) => O(2n)
