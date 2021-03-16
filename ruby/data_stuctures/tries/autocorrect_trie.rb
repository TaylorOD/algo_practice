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

  def autocorrect(self, word)
    currentNode = self.root
    # Keep track of how much of the users word we've found in the trie so far.
    # We'll need to concatenate this with the best suffic we can find in the trie.
    wordFoundSoFar = ""

    for char in word
      # If the current node has child key with current character
      if currentNode.children.get(char)
        wordFoundSoFar += char
        # Follow the child node:
        currentNode = currentNode.children.get(char)
      else
        # If the current characterisn't fond amoung the current node's children,
        # collect all the suffices that descend from the current node and get the first one.
        # We concatenate the suffix with the prefix we've found so far to suggest the word the user meant to type in:
        return wordFoundSoFar + self.collectAllWords(currentNode)[0]
      end
      # If the users word is found in the trie
      return word
    end
  end
end