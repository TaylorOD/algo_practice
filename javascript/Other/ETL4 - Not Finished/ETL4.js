// This is very similar to ETL #3, but you must now accomplish the task in linear time.

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

const ETL4 = function (inputVideoArray, inputAuthorArray) {
let resultArray = []
  for (let i = 0; i < inputAuthorArray.length; i += 1) {
    for (let j = 0; j < inputAuthorArray.length; j += 1) {
      if (inputVideoArray[i].views >= 100) {
        if (inputVideoArray[i].author_id === inputAuthorArray[j].id) {
          if (!resultArray[inputVideoArray[i]]) {
            resultArray.push({
              title: inputVideoArray[i].title,
              views: inputVideoArray[i].views,
              author_name: inputAuthorArray[j].first_name + " " + inputAuthorArray[j].last_name,
            })
          } else {
            resultArray.push({
              title: inputVideoArray[i].title,
              views: inputVideoArray[i].views,
              author_name: inputAuthorArray[j].first_name + " " + inputAuthorArray[j].last_name,
            })
          }
        }
      }
    }
  }
return resultArray
}

console.log(
  ETL4(
    [
      { title: "How to Make Wood", author_id: 4, views: 6 },
      { title: "How to Seem Perfect", author_id: 4, views: 111 },
      { title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202 },
      { title: "Why Pigs Stink", author_id: 1, views: 12 },
    ],
    [
      { id: 1, first_name: "Jazz", last_name: "Callahan" },
      { id: 2, first_name: "Ichabod", last_name: "Loadbearer" },
      { id: 3, first_name: "Saron", last_name: "Kim" },
      { id: 4, first_name: "Teena", last_name: "Burgess" },
    ]
  )
)