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

def body_temp_sort(input_array)
  hash_table = {}

  input_array.each do |temperature|
    if hash_table[temperature]
      hash_table[temperature] += 1
    elsif !hash_table[temperature]
      hash_table[temperature] = 1
    end
  end

  sorted_array = []

  temperature = 970

  while temperature <= 990
    if hash_table[temperature / 10.0]
      hash_table[temperature / 10.0].times do
        sorted_array << temperature / 10.0
      end
    end
    temperature += 1
  end

  return sorted_array
end

p body_temp_sort([98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1])