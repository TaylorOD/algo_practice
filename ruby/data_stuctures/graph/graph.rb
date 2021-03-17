class Vertex
  attr_accessor :value, :adjacent_vertices

  def initialize(value)
    @value = value
    @adjacent_vertices = []
  end

  def add_adjacent_vertext(vertex)
    @adjacent_vertices << vertex
  end
end

alice = Vertex.new("alice")
bob = Vertex.new("bob")

alice.add_adjacent_vertext(bob)

p alice