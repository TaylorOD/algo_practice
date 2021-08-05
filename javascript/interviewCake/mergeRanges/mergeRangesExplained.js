// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// For example:

//   { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// JavaScript
// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// JavaScript
// your function would return:

//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

// JavaScript
// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

// Create a function that takes in the meetings array of objects
const mergeRanges = function (meetingsArray) {
  // Create a copy of the meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(meetingsArray))
  // Sort the copy of the meetings array
  let sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime
  })
  // Create a mergedMeetings array that we will use to return our results
  const mergedMeetings = [sortedMeetings[0]]
  // Create a for loop to move through the sortedMeetings
  for (let index = 0; index < sortedMeetings.length; index += 1) {
    // Create a current meeting variable using index
    let currentMeeting = sortedMeetings[index]
    // Create a last mergedMeeting variable
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]
    // Create an if check. If the start time is less than or equal to the end time of another meeting then
    // Check all meetings to see what the end time should be
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
      // Otherwise add the currentMeeting to the mergedmeetings array
    } else {
      mergedMeetings.push(currentMeeting)
    }
  }
  // Return the mergedMeetings results array
  return mergedMeetings
}
// Call our function with test inputs
console.log(
  mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ])
)
