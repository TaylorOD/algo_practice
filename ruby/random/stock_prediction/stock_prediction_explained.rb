# You're working on some more stock prediction software.
# The function you're writing accepts an array of preficted prices for a particular stock over the course of time.
# Your function should calculate the greatest profit that could be made from a single "buy" transaction followed by a single "sell" transaction.


# Example:
# input:
# [10, 7, 5, 8, 11, 2, 6]
# output:
# 6 (the profit of buying at 5 per share and selling at 11 per share)

# Create a function that takes in an input_array
def stock_prediction(input_array)
  # Establish a buy_price var that is equal to input_array[0]
  buy_price = input_array[0]
  # Create greatest_profit that is equal to 0
  greateast_profit = 0

  # Create an each loop to move through input_array
  input_array.each do |price|
    # The potential profit is the price - the buy_price
    potential_profit = price - buy_price
    # If price < buy_price then the buy price is now equala to price
    if price < buy_price
      buy_price = price
      # Else if the potential profit is more than the grestest profit than the grestest_profit is eqal to the potential profit
    elsif potential_profit > greateast_profit
      greateast_profit = potential_profit
    end
  end
  # Return the grestest_profit
  return greateast_profit
end

p stock_prediction([10, 7, 5, 8, 11, 2, 6])