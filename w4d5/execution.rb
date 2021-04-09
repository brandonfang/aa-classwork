def my_min_1(arr)
  arr.each_with_index do |ele1, i|
    min = true
    arr.each_with_index do |ele2, j|
      min = false if i < j && ele1 > ele2
    end
    return ele1 if min
  end
end

def my_min_2(arr)
  min = arr[0]
  arr.each { |ele| min = ele if ele < min }
  min
end

def largest_contiguous_subsum_1(arr)
  subarrays = contiguous_subarrays(arr)
  max = subarrays[0].sum
  subarrays.each do |subarr|
    max = subarr.sum if subarr.sum > max
  end
  max
end

def contiguous_subarrays(arr)
  subarrays = []
  (0...arr.length).each do |i|
    (i...arr.length).each do |j|
      subarrays << arr[i..j]
    end
  end
  subarrays
end

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum_1(list) # => 8 (from [7, -6, 7])

# list2 = [-5, -1, -3]
# p largest_contiguous_subsum_1(list2) # => -1 (from [-1])







