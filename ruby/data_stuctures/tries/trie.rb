class TrieNode
  def initialize(self)
    self.children = {}
  end
end

class Trie
  def initialize(self)
    self.root = TrieNode()
  end

  def search(self, word)
    currentNode = self.root

    for char in word
      # If the current node has child key with current character:
      if currentNode.children.get(char)
        # Follow the child node:
        currentNode = currentNode.children[char]
      else
        # If the current character isnt found amoung the current node's children,
        # Our search word must not be in the trie:
        return nil
    end
    return currentNode
  end
end