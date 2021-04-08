# We're creating software that analyez the date of body temperature readings taken from hundreds of human patients.
# These readings are taken from healthy people and range from 97.0 degrees Fahrenheit to 99.0 degrees Fahrenheit.
# An important point: Within this application, the decimal point never goes beyond the tenth place.
# Write an algoithm that sorts these readings from lowest to heighest.
# Write it faster than O(N log N) - Which is possible because there is a limited quantity of possible readings.

# Example:
# Input:
# [98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1]

# Output:
# [97.1, 97.1, 97.8, 98.0, 98.0, 98.2, 98.5, 98.6, 98.9, 99.0]

# Create an array that takes in an input_array
def body_temp_sort(input_array)
  # Create a hash table we will use to store each tempature in our inputarray in
  hash_table = {}
  # Populate the hash table with the tempatures
  input_array.each do |temperature|
    if hash_table[temperature]
      hash_table[temperature] += 1
    elsif !hash_table[temperature]
      hash_table[temperature] = 1
    end
  end
  # Create an empty sorted array we will populate with the array data
  sorted_array = []
  # Create a tempature value we will use to increment and loop over
  temperature = 970
  # While loop that runs until tempature reaches 990
  while temperature <= 990
    # If our hash table tempature divided by 10.0 exists
    if hash_table[temperature / 10.0]
      # Then for each time it was added to our hash table (or incremented in our hash table rather), add it to our sorted array
      hash_table[temperature / 10.0].times do
        sorted_array << temperature / 10.0
      end
    end
    # Increment the tempature
    temperature += 1
  end
  # Return the sorted array
  return sorted_array
end
# Call the function with a test input
p body_temp_sort([98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1])