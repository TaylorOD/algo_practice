# Given a hash, return a flat array containing all the hash’s keys and values.

# Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
# Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

# Create a function that takes in an input hash
def flatten_hash (input_hash)
  # Create a results array where
  result = []
  # Use an each loop to move through our hash
  input_hash.each do |key, value|
    # Push each key and each result into our result aray
    result << key
    result << value
  end
  # Return our result array
  return result
end
# Call our function with out test hash
p flatten_hash({"a" => 1, "b" => 2, "c" => 3, "d" => 4})