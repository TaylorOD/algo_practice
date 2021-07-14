# You are given a hash in format #A, and you are to return the same data as a hash using format #B, as specified below:

# Input:

# {
# 1 => ["A", "E", "I", "O", "U"]
# }

# Output:

# {
# 'a' => 1,
# 'e' => 1,
# 'i' => 1,
# 'o' => 1,
# 'u' => 1
# }
# Input:

# {
# 1 => ["A", "E"],
# 2 => ["D", "G"]
# }

# Output:

# {
# 'a' => 1,
# 'd' => 2,
# 'e' => 1,
# 'g' => 2
# }

# Input:

# {
# 1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
# 2 => ["D", "G"],
# 3 => ["B", "C", "M", "P"],
# 4 => ["F", "H", "V", "W", "Y"],
# 5 => ["K"],
# 8 => ["J", "X"],
# 10 => ["Q", "Z"]
# }

# Output:

# {
# 'a' => 1,
# 'b' => 3,
# 'c' => 3,
# 'd' => 2,
# 'e' => 1,
# 'f' => 4,
# 'g' => 2,
# 'h' => 4,
# 'i' => 1,
# 'j' => 8,
# 'k' => 5,
# 'l' => 1,
# 'm' => 3,
# 'n' => 1,
# 'o' => 1,
# 'p' => 3,
# 'q' => 10,
# 'r' => 1,
# 's' => 1,
# 't' => 1,
# 'u' => 1,
# 'v' => 4,
# 'w' => 4,
# 'x' => 8,
# 'y' => 4,
# 'z' => 10
# }

# Create a function that takes in an input_hash
def etl2 (input_hash)
  # Create a results hash
  result = {}
  # Create an each loop to loop over our hash
  input_hash.each do |key, value|
    # Create an each loop using our value
    value.each do |element|
      # Add each element to our results hash with the key
      result[element.downcase] = key
    end
  end
  # Return the result
  return result
end

p etl2({
1 => ["A", "E", "I", "O", "U"]
})

p etl2({
1 => ["A", "E"],
2 => ["D", "G"]
})

p etl2({
1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
2 => ["D", "G"],
3 => ["B", "C", "M", "P"],
4 => ["F", "H", "V", "W", "Y"],
5 => ["K"],
8 => ["J", "X"],
10 => ["Q", "Z"]
})
