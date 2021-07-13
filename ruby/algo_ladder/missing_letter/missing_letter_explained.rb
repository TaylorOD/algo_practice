# A given string contains all the letters from the alphabet except for one. Return the missing letter.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: “The quick brown box jumps over a lazy dog”
# Output: “f”

# Create a function that takes in a string
def missing_letter (input_string)
  # Create an empty hash that we will populate with our alphabet letters
  alphabet_hash = {}
  # Create a string with our alphabet string
  alphabet_string = "abcdefghijklmnopqrstuvwxyz"
  # Create an index we will use to loop through our string
  index = 0
  # Create a while loop
  while index < input_string.length
    # Add each item from the input string to the alphabet hash
    if !alphabet_hash[input_string[index].downcase]
      alphabet_hash[input_string[index]] = true
    end
    # Increment our index
    index += 1
  end

  # Create an index we will use to loop through our string
  index_two = 0
  # Create a while loop
  while index_two < input_string.length
    # If the alphabet_hash doest not include a letter in the alphabet string then return it
    if !alphabet_hash[alphabet_string[index_two]]
      return alphabet_string[index_two]
    end
    # Increment our index
    index_two += 1
  end
end

pp missing_letter("The quick brown box jumps over a lazy dog")