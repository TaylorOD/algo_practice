# Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

# Input: ["a", "b", "c", "d"]
# Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

def array_mesh_2(input_array)
  result = []
  index_one = 0
  while index_one < input_array.length
    index_two = 0
    while index_two < input_array.length
      if index_one != index_two
        result << input_array[index_one] + input_array[index_two]
      end
      index_two += 1
    end
    index_one += 1
  end
  return result
end

p array_mesh_2(["a", "b", "c", "d"])