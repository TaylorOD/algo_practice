# // Write a recusive function that return an array of all anagrams of a given string.

# // Input:
# // "abc"
# // Output:
# // ["abc", "acb", "bac", "bca", "cab", "cba"]

def anagram_generation(input_string)
  result = []

  return [input_string[0]] if input_string.length == 1

  substring_anagrams = anagram_generation(input_string[1, input_string.length - 1])

  substring_anagrams.each do |substring_anagram|
    (0..substring_anagram.length).each do |index|
      copy = String.new(substring_anagram)
      result << copy.insert(index, input_string[0])
    end
  end

  return result
end

p anagram_generation("abcd")
