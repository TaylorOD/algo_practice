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

  def insert(self, word)
    currentNode = self.root

    for char in word
      # If the current node has child key with current character:
      if currentNode.children.get(char)
        # follow the child node:
        currentNode = currentNode.children[char]
    else
      # If the current character isn't found among the current node's children,
      # we add the character as a new child node:
      newNode = TrieNode()
      currentNode.children[char] = newNode

      # follow this new node:
      currentNode = newNode
    end
    # After inserting the entire word into the trie, we add a * key at the end:
    currentNode.children["*"] = nil
  end
end