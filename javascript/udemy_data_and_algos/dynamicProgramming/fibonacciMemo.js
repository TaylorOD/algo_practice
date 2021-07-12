const fibonacciMemo = function (input_number, memo = {}) {
  if (input_number === 0 || input_number === 1) {
    return input_number
  }
  if (!memo[input_number]) {
    memo[input_number] = fibonacciMemo(input_number - 2, memo) + fibonacciMemo(input_number - 1, memo)
  }
  return memo[input_number]
}

console.log(fibonacciMemo(8))

function fibonacciHash(n) {
  let answer = [0, 1]
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1])
  }
  return answer.pop()
}

console.log(fibonacciHash(8))