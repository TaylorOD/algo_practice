# A given array has one pair of duplicate values. Return the first duplicate value.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [5, 2, 9, 7, 2, 6]
# Output: 2

# Create function that takes in an array
def array_duplicate(input_array)
  # Create a duplicate_hash that we will use to store the numbers in our input_array
  duplicate_hash = {}
  # Create a while loop that we will use to loop through each item in our input array
  input_array.each do |number|
    # If it doesnt exist in our duplicate hash already then add it
    if !duplicate_hash[number]
      duplicate_hash[number] = true
    else
      # If it does exist then return it
      return number
    end
  end
end
# Call our function with a test input
pp array_duplicate([5, 2, 9, 7, 2, 6])