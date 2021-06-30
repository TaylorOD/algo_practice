# Given a list of books provided in this format:

# [
# {title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
# {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
# {title: "1984", author: "George Orwell", year: 1949 },
# {title: "Go Set a Watchman", author: "Harper Lee", year: 2015 },
# {title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
# {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
# {title: "The Two Towers", author: "J. R. R. Tolkien", year: 1954 }
# ]

# return the data in this new author-centric format:

# { "J. R. R. Tolkien" => [
# {title: "The Lord of the Rings", year: 1954 },
# {title: "The Hobbit", year: 1937 },
# {title: "The Two Towers", year: 1954 }
# ],
# "Harper Lee" => [
# {title: "To Kill a Mockingbird", year: 1960 },
# {title: "Go Set a Watchman", year: 2015 }
# ],
# "George Orwell" => [
# {title: "1984", year: 1949 }
# ],
# "F. Scott Fitzgerald" => [
# {title: "The Great Gatsby", year: 1925 }
# ]
# }

# Create our function that takes in our book array of hashes
def book_organizer (input_book_array)
  # Create a results hash hash that we will use to store our  organized books
  result = {}
  # Create an each loop and work our way through each book
  input_book_array.each do |book|
    # If the author doesnt exist in the hash then add it with the author being the key and the title and year being in the value in an array
    if !result[book[:author]]
      result[book[:author]] = [{title: book[:title], year: book[:year]}]
      # If it does exist then shovel it to the existing array
    else
      result[book[:author]] << {title: book[:title], year: book[:year]}
    end
  end
  # Return our results hash
  return result
end
# Create our test data
book_array = [
{title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
{title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
{title: "1984", author: "George Orwell", year: 1949 },
{title: "Go Set a Watchman", author: "Harper Lee", year: 2015 },
{title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
{title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
{title: "The Two Towers", author: "J. R. R. Tolkien", year: 1954 }
]
# Call our function with our test data
pp book_organizer(book_array)