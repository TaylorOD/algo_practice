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

  def collectAllWords(self, node = nil, word="", words=[])
    # This method accepts three arguments. The first is the node whose descendants we're collecting words from.
    # The second, word, begins as an empty string and we add characters to it as we move through the trie.
    # The third, words, begins as an empty array and by the end of the function will contain all the words from the trie.

    # The current node is the node pass in as the first parameter or the root node if none is provided
    currentNode = node or self.root

    # We iterate through all the current node's children
    for key, childNode in currentNode.children.items()
      # If the current key is *, it means we hit the end of a complete word, so we can add it to our words array
      if key == "*"
        words.append(word)
      else #if we are still int he middle of a word
        # We recursively call this function on the child node
        self.collectAllWords(childNode, word + key, words)
      end
      return words
    end
  end

  def autocomplete(self, prefix)
    currentNode = self.search(prefix)
    if not currentNode
      return nil
    end
    return self.collectAllWords(currentNode)
  end
end