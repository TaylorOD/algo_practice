# Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

# Do not use any built-in sort methods.

# Input: “silent”, “listen”
# Output: true

# Input: “frog”, “bear”
# Output: false

# Create a function that takes in two input strings
def anagrams (input_string_one, input_string_two)
  # Create an empty hash to store our anagram letters in
  anagram_letters = {}
  # Create an index for our first while loop
  index_one = 0
  # Loop through eaach item in our first string and add it to our hash
  while index_one < input_string_one.length
    anagram_letters[input_string_one[index_one]] = 1
    index_one += 1
  end
  # Create our section index
  index_two = 0
  # Loop through each item in our second string
  while index_two < input_string_two.length
    # If the current letter doesnt exist then reutnr false because they are not anagrams
    if !anagram_letters[input_string_two[index_two]]
      return false
    end
    index_two += 1
  end
  # Otherwise return true
  return true
end
# Call our function with two test inputs
p anagrams("silent", "listen")
p anagrams("frog", "bear")