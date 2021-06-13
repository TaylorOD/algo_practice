# Given an array of strings, return a hash that provides of a count of how many times each string occurs.

# Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

# Output: {"Dewey" => 6, "Truman" => 5}

# Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

def count_votes(input_array)
  result = {}
  index_one = 0
  while index_one < input_array.length
    if (!result[input_array[index_one]])
      result[input_array[index_one]] = 1
    else
      result[input_array[index_one]] += 1
    end
    index_one += 1
  end
  return result
end

p count_votes(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"])