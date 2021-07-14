# Diagonal Difference

def diagonal_difference(arr)
  prime = 0
  secondary = -1
  sum1 = 0
  sum2 = 0
  arr.each do |array|
    sum1 = sum1 + array[prime]
    prime += 1
  end
  arr.each do |array|
    sum2 = sum2 + array[secondary]
    secondary -= 1
  end
  number = (sum1 - sum2)
  return number.abs
end
