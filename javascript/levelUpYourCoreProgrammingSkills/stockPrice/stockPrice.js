const increasingTriplet = function (inputArray) {
  let lowestPrice = inputArray[0]
  let middlePrice = 1000000000000

  inputArray.forEach((price) => {
    if (price <= lowestPrice) {
      lowestPrice = price
    } else if (price <= middlePrice) {
      middlePrice = price
    } else {
      return true
    }
  })
  return false
}

console.log(increasingTriplet([8,9,7,10]))
console.log(increasingTriplet([5,2,8,4,3,7]))
console.log(increasingTriplet([22, 25, 21, 18, 19.6, 17, 16, 20.5]))