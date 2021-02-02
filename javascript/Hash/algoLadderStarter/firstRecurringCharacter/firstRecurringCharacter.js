//Google Question

//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const firstRecurringCharacter = function (array) {

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        return array[i]
      }
    }
  }
  return undefined
}

const firstRecurringCharacterHash = function (array) {
  let result = {}

  for (let i = 0; i < array.length; i += 1) {
    if (result !== array[i]) {
      return array[i]
    } else {
      result[array[i]] = i
    }
  }
  return undefined
}


console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacterHash([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter([1, 5, 5, 1, 3, 4, 6]))
console.log(firstRecurringCharacterHash([1, 5, 5, 1, 3, 4, 6]))

