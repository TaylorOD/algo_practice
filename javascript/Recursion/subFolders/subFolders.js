// This array containing both numbers as well as other arrays which in turn contain numbers and other arrays.
// Write a recursive function that prints all the numbers and just the numbers.

const subFolders = function (inputArray) {
  inputArray.forEach(function(input) {
    if (Array.isArray(input)) {
      subFolders(input)
    }
    else {
      console.log(input)
    }
  })
}

subFolders([
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8,
    [9, 10, 11,
      [12, 13, 14]
    ]
  ],
  [15, 16, 17, 18, 19,
    [20, 21, 22,
      [23, 24, 25,
        [26, 27, 29]
      ], 30, 31
    ], 32
  ], 33
])