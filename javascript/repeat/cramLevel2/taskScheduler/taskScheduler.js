// https://leetcode.com/problems/task-scheduler/

// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation:
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// Example 2:

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.

// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation:
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

const taskScheduler = (tasks, n) => {
  if (n === 0) {
    return tasks.length
  }
  let map = {}

  for (let key of tasks) {
    map[key] = map[key] ? map[key] + 1 : 1
  }
  let max = 0
  let count = 0

  Object.keys(map).forEach((key) => {
    if (map[key] > max) {
      max = map[key]
      count = 1
    } else if (map[key] === max) {
      count++
    }
  })

  return Math.max((max - 1) * (n + 1) + count, tasks.length)
}

console.log(["A","A","A","B","B","B"], 2)
console.log(["A","A","A","B","B","B"], 0)
console.log(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)