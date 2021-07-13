# A given string contains all the letters from the alphabet except for one. Return the missing letter.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: “The quick brown box jumps over a lazy dog”
# Output: “f”

def missing_letter (input_string)
  alphabet_hash = {}
  alphabet_string = "abcdefghijklmnopqrstuvwxyz"

  index = 0
  while index < input_string.length
    if !alphabet_hash[input_string[index].downcase]
      alphabet_hash[input_string[index]] = true
    end
    index += 1
  end

  index_two = 0
  while index_two < input_string.length
    if !alphabet_hash[alphabet_string[index_two]]
      return alphabet_string[index_two]
    end
    index_two += 1
  end
end

pp missing_letter("The quick brown box jumps over a lazy dog")