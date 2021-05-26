# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

def largest_palindrome_product (number_length)
  index_one = 100
  index_two = 100
  largest = 0

  while index_two < 1000
    if is_palindrome(index_one, index_two) > largest
      largest = is_palindrome(index_two, index_two)
    end
    index_one += 1
    index_two += 1
  end
end

p largest_palindrome_product(3)