const minStepsToOne = (num) => {
  const traverse = (current) => {
    if (current === 1) {
      return 0
    }
    let option = traverse(current - 1);

    if (current % 3 === 0) {
      let divide3 = traverse(current / 3)
      option = Math.min(option, divide3)
    }
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2)
      option = Math.min(option, divide2)
    }
    return option + 1
  }

  return traverse(num)
}

console.log(minStepsToOne(1))
console.log(minStepsToOne(10))
console.log(minStepsToOne(30))
console.log(minStepsToOne(50))

const minStepsToOneMemo = (num) => {
  let cache = {}
  const traverse = (current) => {
    if (current in cache) {
      // if (cache[current]) { Another way to write this
      return cache[current]
    }
    if (current === 1) {
      return 0
    }
    let option = traverse(current - 1)

    if (current % 3 === 0) {
      let divide3 = traverse(current / 3)
      option = Math.min(option, divide3)
    }
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2)
      option = Math.min(option, divide2)
    }
    cache[current] = option + 1
    return option + 1
  }
  return traverse(num)
}

console.log(minStepsToOneMemo(1))
console.log(minStepsToOneMemo(10))
console.log(minStepsToOneMemo(30))
console.log(minStepsToOneMemo(50))

const minStepsToOneTab = (num) => {
  const table = new Array(num + 1)
  table[1] = 0
  for (let i = 2; i < table.length; i += 1) {
    let option = table[i - 1]

    if (i % 3 === 0) {
      let divide3 = table[i / 3]
      option = Math.min(option, divide3)
    }
    if (i % 2 === 0) {
      let divide2 = table[i / 2]
      option = Math.min(option, divide2)
    }
    table[i] = option + 1
  }
  return table[num]
}

console.log(minStepsToOneTab(1))
console.log(minStepsToOneTab(10))
console.log(minStepsToOneTab(30))
console.log(minStepsToOneTab(50))