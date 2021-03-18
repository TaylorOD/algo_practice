class Vertex
  attr_accessor :value, :adjacent_vertices

  def initialize(value)
    @value = value
    @adjacent_vertices = []
  end

  def add_adjacent_vertext(vertex)
    @adjacent_vertices << vertex
  end

  def dfs_traverse(vertex, visited_vertices = {})
    # Mark vertex as visited by adding it to the hash table:
    visited_vertices[vertex.value] = true

    # Print the vertex's value, so we can make sure our traversal really workds:
    puts vertex.value

    # Iterate through the current vertex's adjacent vertices:
    vertex.adjacent_vertices.each do |adjacent_vertex|

      # Ignore an adjacent vertex if we've already visited it:
      next if visited_vertices[adjacent_vertex.value]

      # Recursively call this method on the adjacent vertex:
      dfs_traverse(adjacent_vertex, visited_vertices)
    end
  end
end

alice = Vertex.new("alice")
bob = Vertex.new("bob")

alice.add_adjacent_vertext(bob)

p alice

alice.dfs_traverse(bob)