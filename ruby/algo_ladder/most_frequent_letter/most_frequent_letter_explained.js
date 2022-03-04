// # Given a string, find the most commonly occurring letter.

// # Input: “peter piper picked a peck of pickled peppers”
// # Output: “p”

// # Create our function that takes in a string
// # def most_frequent_letter(input_string)
// #   # Create out most frequent letter empty string. This is what we will return
// #   most_frequent_letter = ""
// #   # Create our most frequent letter count. This is how will will track what letter to return
// #   most_frequent_letter_count = 0
// #   # Remove the spaces from our string in case they are the most common character
// #   no_spaced_string = input_string.delete(" ")
// #   # Create our letter hash which we will use to store how many times each letter comes up
// #   letter_hash = {}
// #   # Create our index
// #   index_one = 0
// #   # Create a while loop to loop over the string
// #   while index_one < no_spaced_string.length
// #     # If the current character does not exist in the letter_hash than add it
// #     if !letter_hash[no_spaced_string[index_one]]
// #       letter_hash[no_spaced_string[index_one]] = 1
// #       # If it does exist then increment it by 1
// #     else
// #       letter_hash[no_spaced_string[index_one]] += 1
// #     end
// #     # If the current chracter in the letter hash is greater than our most_frequent_letter_count then
// #     if letter_hash[no_spaced_string[index_one]] > most_frequent_letter_count
// #       # Make it our most frequent letter
// #       most_frequent_letter = no_spaced_string[index_one]
// #       # Make our most frequent letter count the number of times we have seen it
// #       most_frequent_letter_count = letter_hash[no_spaced_string[index_one]]
// #     end
// #     # Increment our index
// #     index_one += 1
// #   end
// #   # Return the most_frequent_letter
// #   return most_frequent_letter
// # end
// # # Call our function with a test input
// # p most_frequent_letter("peter piper picked a peck of pickled peppers")