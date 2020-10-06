# Staircase
def staircase(n)
  index1 = 1
  index2 = 5
  hashtags = "#"
  spaces = " "
  while n > 0
    puts spaces * index2 + hashtags * index1
    index1 += 1
    index2 -= 1
    n -= 1
  end
end

function aVeryBigSum(ar) {
  let result = 0
  ar.forEach (function (number) {
               result = result + number
             })
  return result
}
