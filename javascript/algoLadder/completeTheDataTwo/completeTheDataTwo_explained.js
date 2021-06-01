// Given an array of social media posts and an array of users, return a list of posts (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

// For example, given this array of posts (note that the submitted_by is an id number):

// [
// {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
// {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
// {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
// ]

// And this array of users:

// [
// {user_id: 403, name: "Aunty Em"},
// {user_id: 231, name: "Joelle P."},
// {user_id: 989, name: "Lyndon Johnson"},
// {user_id: 111, name: "Patti Q."},
// ]

// Return the array of posts as follows:

// [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]

// Create function that takes in our two input data array of objects
const completeTheDataTwo = function (inputPostArray, inputUserArray) {
  // Create a results array
  let results = []
  
  // Create a for loop that will loop over the input post array
  for (let i = 0; i < inputPostArray.length; i += 1) {
    // Create a for loop that will loop over the input user array
    for (let j = 0; j < inputUserArray.length; j += 1) {
      // If the inputPostArray currently selected submitted by is equal to the inputUserArray currently selected user_id
      if (inputPostArray[i].submitted_by === inputUserArray[j].user_id) {
        // Then save the inputPostArray submitted_by as the inputUserArray name element
        inputPostArray[i].submitted_by = inputUserArray[j].name
      }
    }
  }
  // Add our updated inputPostArray to our results variable
  results.push(inputPostArray)
  // Return the results variable
  return results
}
// Call our function with the givin input data
console.log(completeTheDataTwo([
  {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
  {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
  {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
  {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
  ],
  [
    {user_id: 403, name: "Aunty Em"},
    {user_id: 231, name: "Joelle P."},
    {user_id: 989, name: "Lyndon Johnson"},
    {user_id: 111, name: "Patti Q."},
  ]
  ))