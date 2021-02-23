# Code implementation of a linked list:

class Node
  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end
end

class LinkedList
  attr_accessor :first_node

  def initialize(first_node)
    @first_node = first_node
  end

  def read(index)
    # We start with the first node of the list:
    current_node = first_node
    current_index = 0

    while current_index < index do
      # We keep following the links of each node until we get to the index we're looking for:
      current_node = current_node.next_node
      current_index += 1

      # If we're past the end of the list, that means the value cannot be found in the list, so return nil:
      return nill unless current_node
    end

    return current_node.data
  end

  def index_of(value)
    # We begin at the first node of the list:
    current_node = first_node
    current_index = 0

    begin
      # If we find the data we're looking for, we return it:
      if current_node.data == value
        return current_index
      end

      # Otherwise, we move on to the next node:
      current_node = current_node.next_node
      current_index += 1

    end while current_node

    # If we get through the entire list without finding the data, we return nil:
    return nil
  end
end