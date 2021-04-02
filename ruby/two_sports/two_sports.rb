# You're working on software that analyzes sports players. Following are two arrays of player of different sports:
# If you look close, you'll see that there are some players who participate in more than one kind of sport.
# Write a function that accepts two arrays of players and returns an array of the players who play inboth sports.

# With the below input our result output would be: ["Jill Huang", "Wanda Vakulskas"]

# Can you find a solution that is O(N + M)?

def two_sports(array_one, array_two)
  full_names = {}
  result = []
  array_one.each do |athlete|
    full_names[athlete[:first_name] + " " + athlete[:last_name]] = true
  end
  array_two.each do |athlete|
    if full_names[athlete[:first_name] + " " + athlete[:last_name]]
      result << athlete[:first_name] + " " + athlete[:last_name]
    end
  end
  return result
end

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


# Next day attempt
def two_sports_two(input_array_one, input_array_two)
  athletes = {}
  multi_athletes = []

  input_array_one.each do |athlete|
    athletes[athlete[:first_name] + athlete[:last_name]] = true
  end

  input_array_two.each do |athlete|
    if athletes[athlete[:first_name] + athlete[:last_name]]
      multi_athletes << athlete[:first_name] + " " + athlete[:last_name]
    end
  end


  return multi_athletes
end

p two_sports_two(
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