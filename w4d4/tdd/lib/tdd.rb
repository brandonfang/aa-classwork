class Array

  def remove_dups
    self.select {|ele| self.count(ele) == 1}
  end

  def two_sum
    result = []
    (0...self.length).each do |i|
      (i+1...self.length).each do |j|
        result << [i, j] if self[i] + self[j] == 0
      end
    end
    result
  end

  def my_transpose
    return self if self.length < 2
    result = Array.new(self.length) { Array.new(self.length) }
    (0...self.length).each do |i|
      (0...self.length).each do |j|
        result[i][j] = self[j][i]
      end
    end
    result
  end

end

def stock_picker(arr)
  raise unless arr.is_a?(Array) && arr.length > 1
  curr_min = arr[0]
  curr_diff = arr[1] - arr[0]
  curr_min_i = 0
  curr_max_i = 1
  (1...arr.length - 1).each do |i|
    if curr_min > arr[i]
      curr_min = arr[i] 
      curr_min_i = i
    end
    if (arr[i + 1] - curr_min) > curr_diff
      curr_diff = arr[i + 1] - curr_min 
      curr_max_i = i + 1
    end
  end
  [curr_min_i, curr_max_i]
end