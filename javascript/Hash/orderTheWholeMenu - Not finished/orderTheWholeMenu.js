// Given a hash, where the keys are strings representing food items, 
// and the values are numbers representing the price of each food, 
// return the amount someone would pay if they'd order one of each food from the entire menu.

// Input: {"hot dog" = 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

// Output: 14

// Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

const orderTheWholeMenu = function (menuHash) {
  let resultSum = 0
  let index = 0
  while (index < menuHash.length) {
    index += 1
  }

  for (let i = 0; i < menuHash.length; i += 1) {
    resultSum = resultSum + menuHash[i].number

  }
  
  return resultSum
}

console.log(orderTheWholeMenu({"hot dog": 2, "hamburger": 3, "steak sandwich": 5, "fries": 1, "cole slaw": 1, "soda": 2}))