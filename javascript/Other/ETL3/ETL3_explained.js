// Given an array of Youtube videos, for example:

// [
// {title: 'How to Make Wood', author_id: 4, views: 6},
// {title: 'How to Seem Perfect', author_id: 4, views: 111},
// {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
// {title: 'Why Pigs Stink', author_id: 1, views: 12}
// ]

// and an array of authors, for example:

// [
// {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
// {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
// {id: 3, first_name: 'Saron', last_name: 'Kim'},
// {id: 4, first_name: 'Teena', last_name: 'Burgess'},
// ]

// Return a new array of videos in the following format, and only include videos that have at least 100 views:

// [
// {title: 'How to Seem Perfect', views: 111, author_name: 'Teena Burgess' }
// {title: 'Review of the New "Unbreakable Mug"', views: 202, author_name: 'Ichabod Loadbearer' },
// ]

// Create function that takes in both of our input arrays
const etlThree = function (inputYoutubeArray, inputAuthorArray) {
  // Create an empty results array we will use to store our output
  let resultArray = []
  // Create a for loop we will use to loop over the array
  for (let i = 0; i < inputAuthorArray.length; i += 1) {
    // Create a second for loop which we will use to test our author ids
    for (let j = 0; j < inputAuthorArray.length; j += 1) {
      // If the current video views are greater than 100 than continue
      if (inputYoutubeArray[i].views >= 100) {
        // If the inputYoutubeArray author_id is equal to the inputAuthorArray id then continue
        if (inputYoutubeArray[i].author_id === inputAuthorArray[j].id) {
          // If the resultArray does not contain this input then create it below
          if (!resultArray[inputYoutubeArray[i]]) {
            // We are adding the youtube video title, the view count, and a concatenated version of the author name. Note the author name uses j rather than i
            resultArray.push({title: inputYoutubeArray[i].title, views: inputYoutubeArray[i].views, author_name: inputAuthorArray[j].first_name + " " + inputAuthorArray[j].last_name})
          } else {
            // Allows us to add more than 1 result to our resultsArray
            resultArray.push({title: inputYoutubeArray[i].title, views: inputYoutubeArray[i].views, author_name: inputAuthorArray[j].first_name + " " + inputAuthorArray[j].last_name})
          }
        }
      }
    }
  }
  // Return the results array
  return resultArray
}
// Call the function with the two givin inputs
console.log(etlThree([
  {title: 'How to Make Wood', author_id: 4, views: 6},
  {title: 'How to Seem Perfect', author_id: 4, views: 111},
  {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
  {title: 'Why Pigs Stink', author_id: 1, views: 12}
  ], [
    {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
    {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
    {id: 3, first_name: 'Saron', last_name: 'Kim'},
    {id: 4, first_name: 'Teena', last_name: 'Burgess'},
  ])
)