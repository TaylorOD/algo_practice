# Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

# Input: ["a", "b", "c"], ["d", "e", "f", "g"]
# Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

def array_mesh_1 (input_array_one, input_array_two)
  result = []
  index_one = 0
  while index_one < input_array_one.length
    index_two = 0
    while index_two < input_array_two.length
      result << input_array_one[index_one] + input_array_two[index_two]
      index_two += 1
    end
    index_one += 1
  end
  return result
end

p array_mesh_1(["a", "b", "c"], ["d", "e", "f", "g"])