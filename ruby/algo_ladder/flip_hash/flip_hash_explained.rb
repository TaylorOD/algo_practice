# Given a hash, create a new hash that has the keys and values switched.

# Input: {"a" => 1, "b" => 2, "c" => 3}
# Output: {1 => "a", 2 => "b", 3 => "c"}

# Create function that takes in input_hash
def flip_hash (input_hash)
  # Create empty results hash to store results
  result = {}
  # Create and each loop.
  input_hash.each do |key, value|
    # Store each item swapping the value and the key
    result[value] = key
  end
  # Return result
  return result
end
# Call our function with test input
p flip_hash({"a" => 1, "b" => 2, "c" => 3})