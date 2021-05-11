// 1: Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: "cbbd"
// Output: "bb"


const longestPalindromicSubStr = (str) => {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 2; j <= str.length - i; j++) {
            let subStr = str.slice(i, i + j);
            let reversed = subStr.split('').reverse().join('');
            if (subStr === reversed) result.push(subStr);
        }
    }

    if (result.length === 0) return '';

    let longest = result.reduce((a, b) => {
        return a.length > b.length ? a : b;
    });

    return longest;
};

console.dir(longestPalindromicSubStr('babad'));





// 2: Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

const binarySearch = (array, target) => {
  if (array.length === 0) return -1;

  const midpoint = Math.floor(array.length / 2);
  if (array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
  } else if (array[midpoint] < target) {
    const subResult = binarySearch(array.slice(midpoint + 1), target);
    return subResult === -1 ? -1 : subResult + midpoint + 1;
  } else {
    return midpoint;
  }
};

const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    if (target < matrix[i][0] || target > matrix[i][matrix[i].length - 1]) {
      continue;
    } else {
      let targetIndex = binarySearch(matrix[i], target);
      if (targetIndex === -1) {
        return false;
      } else {
        return true;
      }
    }
  }

  return false;
};

// matrix1 = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target1 = 22;

// matrix2 = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target2 = 13

// console.log(searchMatrix(matrix1, target1));
// console.log(searchMatrix(matrix2, target2));
