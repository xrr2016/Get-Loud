const uniqueArr = arr => {
  return new Set([...arr])
}

const diffArr = (arr1, arr2) => {
  let diff = []
  arr2 = uniqueArr(arr2)
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) ) {
      continue
    }
    diff.push(arr2[i])
  }
  return diff
}

const unExistNumbers = arr => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return diffArr(numbers, arr)
}

const test = [1,0,0,7,3,0,0,0,0]
console.log(unExistNumbers(test))

// export const solution = async table => {
//   const row = []
//   const col = []
//   const block = []
// }
