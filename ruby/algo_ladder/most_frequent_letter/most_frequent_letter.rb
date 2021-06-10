# Given a string, find the most commonly occurring letter.

# Input: “peter piper picked a peck of pickled peppers”
# Output: “p”

def most_frequent_letter(input_string)
  most_frequent_letter = ""
  most_frequent_letter_count = 0
  no_spaced_string = input_string.delete(" ")
  letter_hash = {}
  index_one = 0
  while index_one < no_spaced_string.length
    if !letter_hash[no_spaced_string[index_one]]
      letter_hash[no_spaced_string[index_one]] = 1
    else
      letter_hash[no_spaced_string[index_one]] += 1
    end

    if letter_hash[no_spaced_string[index_one]] > most_frequent_letter_count
      most_frequent_letter = no_spaced_string[index_one]
      most_frequent_letter_count = letter_hash[no_spaced_string[index_one]]
    end
    index_one += 1
  end
  return most_frequent_letter
end

p most_frequent_letter("peter piper picked a peck of pickled peppers")