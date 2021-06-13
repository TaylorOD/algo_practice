# Given an array of strings, return a hash that provides of a count of how many times each string occurs.

# Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

# Output: {"Dewey" => 6, "Truman" => 5}

# Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

# Create a function that takes in an array
def count_votes(input_array)
  # Create an empty results hash that we will use to store our results
  result = {}
  # Create and index
  index_one = 0
  # Create a while loop to loop through the length of our array
  while index_one < input_array.length
    # If the result doesnt exist in the hash then add it
    if (!result[input_array[index_one]])
      result[input_array[index_one]] = 1
      # If it does exist then increment it
    else
      result[input_array[index_one]] += 1
    end
    # Increment our index by 1
    index_one += 1
  end
  # Return our results array
  return result
end
# Call our function with test inputs
p count_votes(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"])