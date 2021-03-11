class TrieNode
  def initialize(self)
    self.children = {}
  end
end

class Trie
  def initialize(self)
    self.root = TrieNode()
  end
end