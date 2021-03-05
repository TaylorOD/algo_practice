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

  def insert(value, node)
    if value < node.value
      # If the left child does not exist, we want to instert the value as the left child:
      if node.leftChild == nil
        node.leftChild = TreeNode(value)
      else
        instert(value, node.leftChild)
      elsif value >  node.value
        # If the right child does not exist, we want to inster the value as the right child:
        if node.rightChild == nil
          node.rightChild = TreeNode(value)
        else
          instert(value, node.rightChild)
        end
      end
    end
  end

  def delete(valueToDelete, node)
    # The base case is when we've hit the bottom of the tree, and the parent node has no children
    if node == nil
      return nil
     # If the value we're deleting is less or greater than the current node
     # we set the left or right child respectively to be the return value of a
     # recursive call of this method on the current node's left of right subtree
    elsif valueToDelete < node.value
      node.leftChild = delete(valueToDelete, node.leftChild)

      # We return the current node (and its subtree if existent)
      # to be used as the new value of its parent's left or right child:
      return node

     # If the current node is the one we want to delete:
    elsif valueToDelete == node.value
      # If the current node has no left child, we delete it by
      # returning its right child (and its subtree if it exists)
      # to be its parent's new subtree
      if node.leftChild == nil
        return node.rightChild

        # (If the current node has no left OR right children, this ends up being Nil
        # as per the first line of code in this function)
      elsif node.rightChild == nil
        return none.leftChild

        # If the current node has two children, we delete the current node by calling the lift function (below),
        # which changes the current node's value to the value of its successor node
      else
        node.rightChild = lift(node.rightChild, node)
        return node
      end
    end
  end

  def lift(node, nodeToDelete)
    # If the current node of this function has a left child,
    # we recursively call this function to continue down the left subtree to find the successor node.
    if node.leftChild
      node.leftChild = lift(node.leftChild, nodeToDelete)
      return node
      # If the current node has no left child, that means the current node of this function
      # is the successor node, and we take its value and make it the new value of the node
      # that we're deleting
    else
      nodeToDelete.value = node.value
      # We return the successor node's right child to be now used as its parent's left child
      return node.rightChild
    end
  end

  def traverse_and_print(node)
    if node == nil
      return
    end
    traverse_and_print(node.leftChild)
    print (node.value)
    traverse_and_print(node.rightChild)
  end

  def traverse_and_print_preorder(node)
    if node == nil
      return
    end
    print (node.value)
    traverse_and_print_preorder(node.leftChild)
    traverse_and_print_preorder(node.rightChild)
  end

  def traverse_and_print_postorder(node)
    if node == nil
      return
    end
    traverse_and_print_postorder(node.leftChild)
    traverse_and_print_postorder(node.rightChild)
    print (node.value)
  end

end