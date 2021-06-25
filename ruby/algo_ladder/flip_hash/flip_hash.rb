# Given a hash, create a new hash that has the keys and values switched.

# Input: {"a" => 1, "b" => 2, "c" => 3}
# Output: {1 => "a", 2 => "b", 3 => "c"}

def flip_hash (input_hash)
  result = {}
  input_hash.each do |key, value|
    result[value] = key
  end
  return result
end

p flip_hash({"a" => 1, "b" => 2, "c" => 3})