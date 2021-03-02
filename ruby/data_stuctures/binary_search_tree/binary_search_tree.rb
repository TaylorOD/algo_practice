def tree_node
  def initialize(self.val, left = nil, right = nil)
    self.value = val
    self.rightChild = right
    self.leftChild = left
  end

  def search(searchValue, node)
    # Basecase: if the node is nonexistent or if we've found the value we're looking for:
    if node == nil || node.value == searchValue
      return node
    # If the value is less than the current node, perform the search on the left child:
    elsif searchValue < node.value
      return search(searchValue, node.leftChild)
    # If the value is greater than the current node, perform the search on the right child:
    else
      return search(searchValue, node.rightChild)
    end
end