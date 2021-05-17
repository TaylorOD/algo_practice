# Given a year, report if it is a leap year.

# The tricky thing here is that a leap year in the Gregorian calendar occurs:

# on every year that is evenly divisible by 4
# except every year that is evenly divisible by 100
# unless the year is also evenly divisible by 400
# For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

# If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.

# Create a function that takes in a year/number
def leap_year (year)
  # Create an if condition to see if our our year is divisable cleanly by 4
  if year % 4 == 0
    # If so we want to check if it is divisable cleanly by 100
    if year % 100 == 0
      # If so we want to check if it is divisable cleanly by 400
      if year % 400 == 0
        # If that is true then return true
        return true
      end
      # If it is divisable by 4 and 100 but not 400 then return false
      return false
    end
    # If it is divisable by 4 but not 100 then return true
    return true
  end
  # Return false for all checks that are not divisable by 4
  return false
end
# Call our function with four test cases.
p leap_year(1997)
p leap_year(1996)
p leap_year(1900)
p leap_year(2000)