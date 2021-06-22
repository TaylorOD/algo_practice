# Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

# Do not use any built-in sort methods.

# Input: “silent”, “listen”
# Output: true

# Input: “frog”, “bear”
# Output: false

def anagrams (input_string_one, input_string_two)
  anagram_letters = {}

  index_one = 0
  while index_one < input_string_one.length
    anagram_letters[input_string_one[index_one]] = 1
    index_one += 1
  end

  index_two = 0
  while index_two < input_string_two.length
    if !anagram_letters[input_string_two[index_two]]
      return false
    end
    index_two += 1
  end
  return true
end

p anagrams("silent", "listen")
p anagrams("frog", "bear")