// A Very Big Sum

let numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(array) {
  let result = 0
  array.forEach((number) => {
    result = result + number
  })
  return result
}

console.log(aVeryBigSum(numbers))
