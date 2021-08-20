// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

// Think about capitalized words. For example, look at these sentences:

//   "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."
// What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

const wordCloudData = function (inputString) {
  let map = {}
  let splitInputString = inputString.split(" ")
  for (let index = 0; index < splitInputString.length; index += 1) {
    if (!map[splitInputString[index]]) {
      map[splitInputString[index]] = 1
    } else {
      map[splitInputString[index]] += 1
    }
  }
  return map
}

console.log(wordCloudData("I like cake"))
console.log(wordCloudData("Chocolate cake for dinner and pound cake for dessert"))
console.log(wordCloudData("Strawberry short cake? Yum!"))
console.log(wordCloudData("Allie's Bakery: Sasha's Cakes"))

// [['I', 1], ['like', 1], ['cake', 1]]);
// [['and', 1], ['pound', 1], ['for', 2], ['dessert', 1], ['Chocolate', 1], ['dinner', 1], ['cake', 2]]);
// [['cake', 1], ['Strawberry', 1], ['short', 1], ['Yum', 1]]
// [['Bakery', 1], ['Cakes', 1], ["Allie's", 1], ["Sasha's", 1]]