// Given an array of social media posts and a hash of users, return a list of posts (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

// For example, given this array of posts (note that the submitted_by is an id number):

// [
// {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
// {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
// {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
// ]

// And this hash of users (the key is the id number and the value is the user's real name):

// users = {403 => "Aunty Em", 231 => "Joelle P.", 989 => "Lyndon Johnson", 111 => "Patti Q."}

// Return the array of posts as follows:

// [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]

// Create a function that takes in the Post Data as an array of hashes 
const completeTheData = function (postDataArrayOfHashes) {
  // Create the user object/hash that we will use to update the posts below
  let users = {403: "Aunty Em", 231: "Joelle P.", 989: "Lyndon Johnson", 111: "Patti Q."}
  
  // Create a for loop to loop over the length of the post data
  for (let i = 0; i < postDataArrayOfHashes.length; i += 1) {
    // Create a for in loop that we will use to loop through the users data hash
    for (let userID in users) {
      // Create an if state that will trigger when the users[userID] (name) matches the user[postDataArrayOfHashes][i].submitted_by (name)
      if (users[userID] === users[postDataArrayOfHashes[i].submitted_by]) {
        // When it matches save the submitted by value as the users[userID] (matching name / ID)
        postDataArrayOfHashes[i].submitted_by = users[userID]
      }
    }
  }
  // Return the updated arrayOfHashes
  return postDataArrayOfHashes
}

// Call the function with the given input data
console.log(completeTheData( [
  {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
  {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
  {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
  {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
  ]))