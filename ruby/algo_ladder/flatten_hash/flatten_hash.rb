# Given a hash, return a flat array containing all the hash’s keys and values.

# Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
# Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

def flatten_hash (input_hash)
  result = []

  input_hash.each do |key, value|
    result << key
    result << value
  end
  return result
end

p flatten_hash({"a" => 1, "b" => 2, "c" => 3, "d" => 4})