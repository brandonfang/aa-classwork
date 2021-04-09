def bad_two_sum?(arr, target)
    arr.each_with_index do |ele, i|
        (i+1...arr.length).each do |j|
            return true if arr[i] + arr[j] == target
        end
    end
    false
end
# time complexity O(n^2)
# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

def okay_two_sum?(arr, target)
    arr = arr.sort #n log n
    (0...arr.length).each do |i| #n
        search = bsearch(arr, target-arr[i]) # log n
        return true unless search.nil?
    end #n log n
    false
end

def bsearch(arr, target)
    return arr if arr.length < 2
    mid = arr.length/2

    case arr[mid] <=> target
    when 0
        return mid
    when -1
        return bsearch(arr[0..mid], target)
    when 1
        return bsearch(arr[mid+1..-1], target)
    end
end

arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false
arr2 = [3, 6, 6, 4]
p okay_two_sum?(arr2, 12) # => should be true
p okay_two_sum?(arr2, 9) # => should be true

def two_sum?(arr,target)

    hash = Hash.new {|h,k| h[k] = [] }
    arr.each_with_index do |ele, i|
        hash[ele] << i
    end

    hash.each do |k, v|
        if k == target/2
            return true if v.length > 1
        elsif hash.has_key?(target-k)
            return true 
        end
    end
    false
end

# arr = [0, 1, 5, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false
# arr2 = [3, 6, 6, 4]
# p two_sum?(arr2, 12) # => should be true
# p two_sum?(arr2, 9) # => should be true

