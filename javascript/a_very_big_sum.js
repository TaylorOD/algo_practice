// A Very Big Sum

let numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
  let result = 0
  ar.forEach(function (number) {
    result = result + number
  })
  return result
}

console.log(aVeryBigSum(numbers))
