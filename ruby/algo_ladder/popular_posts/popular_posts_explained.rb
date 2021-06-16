# Given an array of hashes that represent a list of social media posts, return a new array that only contains the posts that have at least 1000 likes.

# Input: [
# {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
# {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
# {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
# {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
# ]

# Output: [
# {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
# {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
# ]

# Create popular_posts function that takes in an array of hashes
def popular_posts (input_array_of_hashes)
  # Create an empty array that we will use to store our hashs
  result_array = []
  # Create an each loop that will loop over each element in our input hash
  input_array_of_hashes.each do |input_hash|
    # If statement that checks if the posts has more than 1000 likes
    if input_hash[:likes] >= 1000
      # If it does then add the title and submitted_by elements of the hash
      result_array << {title: input_hash[:title], submitted_by: input_hash[:submitted_by]}
    end
  end
  # Return the results array
  return result_array
end
# Call our popular posts function with test data
p popular_posts([
{title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
{title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
{title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
{title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
])