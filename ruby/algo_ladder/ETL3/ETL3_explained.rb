# Given an array of Youtube videos, for example:

# [
# {title: 'How to Make Wood', author_id: 4, views: 6},
# {title: 'How to Seem Perfect', author_id: 4, views: 111},
# {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
# {title: 'Why Pigs Stink', author_id: 1, views: 12}
# ]

# and an array of authors, for example:

# [
# {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
# {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
# {id: 3, first_name: 'Saron', last_name: 'Kim'},
# {id: 4, first_name: 'Teena', last_name: 'Burgess'},
# ]

# Return a new array of videos in the following format, and only include videos that have at least 100 views:

# [
# {title: 'How to Seem Perfect', views: 111, author_name: 'Teena Burgess' }
# {title: 'Review of the New "Unbreakable Mug"', views: 202, author_name: 'Ichabod Loadbearer' },
# ]

# Create function that takes in a video and author array
def ETL3 (input_video_array, input_author_array)
  # Create an array that we will use to store our results
  result = []
  # Create an each loop for video array
  input_video_array.each do |video|
    # Create an each loop for author array
    input_author_array.each do |author|
      # If the video has at least 100 views
      if video[:views] >= 100
        # And the author_id matching the id in the author array
        if video[:author_id] == author[:id]
          # Concantinate the author name
          author_name = author[:first_name] +" " + author[:last_name]
          # Add the updated title, views, and author name to our results array
          result << {title: video[:title], views: video[:views], author_name: author_name}
        end
      end
    end
  end
  # Return our results array of hashs
  return result
end
# Create our test video data
video_array = [
{title: 'How to Make Wood', author_id: 4, views: 6},
{title: 'How to Seem Perfect', author_id: 4, views: 111},
{title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
{title: 'Why Pigs Stink', author_id: 1, views: 12}
]
# Create our test author data
author_array = [
{id: 1, first_name: 'Jazz', last_name: 'Callahan'},
{id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
{id: 3, first_name: 'Saron', last_name: 'Kim'},
{id: 4, first_name: 'Teena', last_name: 'Burgess'},
]
# Call our function with our test data
pp ETL3(video_array, author_array)