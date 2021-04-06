# // Write a recusive function that return an array of all anagrams of a given string.

# // Input:
# // "abc"
# // Output:
# // ["abc", "acb", "bac", "bca", "cab", "cba"]

# Create an function that takes in our input test string
def anagram_generation(input_string)
  # Create a results array that we will return and store out strings in
  result = []

  # Base case: if the string is only one character long it is an anagram of nothing but itself
  return [input_string[0]] if input_string.length == 1
  # Call our function recusively
  substring_anagrams = anagram_generation(input_string[1, input_string.length - 1])
  # Create an each loop to loop over our substring
  substring_anagrams.each do |substring_anagram|
    # Loop over each item in our substring
    (0..substring_anagram.length).each do |index|
      # Create a new string out of each
      copy = String.new(substring_anagram)
      # Add the string element and the index to the results folder
      result << copy.insert(index, input_string[0])
    end
  end
  # Return results
  return result
end

# Test our function with two test cases
p anagram_generation("abc")
p anagram_generation("abcd")
