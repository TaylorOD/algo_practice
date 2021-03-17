class Vertex
  attr_accessor :value, :adjacent_vertices

  def initalize(value)
    @value = value
    @adjacent_vertices = []
  end

  def add_adjacent_vertices(vertex)
    @adjacent_vertices << vertex
  end
end
