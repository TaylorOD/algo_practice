# Code implementation of a linked list:

class Node
  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end
end

class LinkedList
  attr_accessor :first_node

  def first_node(first_node)
    @first_node = first_node
  end

  def read(index)
    current_node = first_node
    current_index = 0

    while current_index < index
      current_node = current_node.next_node
      current_index += 1

      return nil unless current_node

    end

    return current_node.data
  end


end