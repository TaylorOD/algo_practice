bubble = [1, 0, -10, 10000, 993423, 234238423402384, 11, 11, 12, 12, 1239012309128312, 1223, 45065, 55, 0344342, 0234, 111]

bubble.length.times do
  index = 0
  while index < bubble.length - 1
    if bubble[index] > bubble[index + 1]
      x = bubble[index]
      bubble[index] = bubble[index + 1]
      bubble[index + 1] = x
    end
    index += 1
  end
end

p bubble
