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

const etlThree = function (inputYoutubeArray, inputAuthorArray) {
  let resultArray = []
  for (let i = 0; i < inputAuthorArray.length; i += 1) {
    for (let j = 0; j < inputAuthorArray.length; j += 1) {
      if (inputYoutubeArray[i].views >= 100) {
        if (inputYoutubeArray[i].author_id === inputAuthorArray[j].id) {
          if (!resultArray[inputYoutubeArray[i]]) {
            resultArray.push({title: inputYoutubeArray[i].title, views: inputYoutubeArray[i].views, author_name: inputAuthorArray[j].first_name + " " + inputAuthorArray[j].last_name})
          } else {
            resultArray.push({title: inputYoutubeArray[i].title, views: inputYoutubeArray[i].views, author_name: inputAuthorArray[j].first_name + " " + inputAuthorArray[j].last_name})
          }
        }
      }
    }
  }
  
  return resultArray
}

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