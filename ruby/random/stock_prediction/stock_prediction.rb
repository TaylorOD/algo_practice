# You're working on some more stock prediction software.
# The function you're writing accepts an array of preficted prices for a particular stock over the course of time.
# Your function should calculate the greatest profit that could be made from a single "buy" transaction followed by a single "sell" transaction.


# Example:
# input:
# [10, 7, 5, 8, 11, 2, 6]
# output:
# 6 (the profit of buying at 5 per share and selling at 11 per share)

def stock_prediction(input_array)
  buy_price = input_array[0]
  greateast_profit = 0

  input_array.each do |price|
    potential_profit = price - buy_price

    if price < buy_price
      buy_price = price
    elsif potential_profit > greateast_profit
      greateast_profit = potential_profit
    end
  end
  return greateast_profit
end

p stock_prediction([10, 7, 5, 8, 11, 2, 6])