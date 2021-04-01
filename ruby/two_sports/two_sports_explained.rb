# You're working on software that analyzes sports players. Following are two arrays of player of different sports:
# If you look close, you'll see that there are some players who participate in more than one kind of sport.
# Write a function that accepts two arrays of players and returns an array of the players who play inboth sports.

# With the below input our result output would be: ["Jill Huang", "Wanda Vakulskas"]

# Can you find a solution that is O(N + M)?

# Create a function that takes in two input arrays
def two_sports(array_one, array_two)
  # Create a hash table that we will populate below
  full_names = {}
  # Create a results array which we will populate below and return
  result = []
  # Use an each loop to add each athlete's full name to our hash table if they are in array one
  array_one.each do |athlete|
    full_names[athlete[:first_name] + " " + athlete[:last_name]] = true
  end
  # Use a second each loop to add any ahtlete's name that is already in our hash taable to our results array.
  # If they already exist in the hash table and are in our second array it means they play both sports
  array_two.each do |athlete|
    if full_names[athlete[:first_name] + " " + athlete[:last_name]]
      result << athlete[:first_name] + " " + athlete[:last_name]
    end
  end
  # Return our results aray
  return result
end
# Call our function using our test inputs
p two_sports(
basketball_players = [
  {first_name: "Jill", last_name: "Huang", team: "Gators"},
  {first_name: "Janko", last_name: "Barton", team: "Sharks"},
  {first_name: "Wanda", last_name: "Vakulskas", team: "Sharks"},
  {first_name: "Jill", last_name: "Moloney", team: "Gators"},
  {first_name: "Luuk", last_name: "Watkins", team: "Gators"}
],
football_players = [
  { first_name: "Hanzla", last_name: "Radosti", team: "32ers" },
  { first_name: "Tina", last_name: "Watkins", team: "Barleycorns" },
  { first_name: "Alex", last_name: "Patel", team: "32ers" },
  { first_name: "Jill", last_name: "Huang", team: "Barleycorns" },
  { first_name: "Wanda", last_name: "Vakulskas", team: "Barleycorns" },
])