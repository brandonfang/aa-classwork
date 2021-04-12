class MaxIntSet
  attr_reader :store
  
  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    if !is_valid?(num)
      raise "Out of bounds"
    end
    @store[num] = true
  end

  def remove(num)
    if !is_valid?(num)
      raise "Out of bounds"
    end
    @store[num] = false
  end

  def include?(num)
    if !is_valid?(num)
      raise "Out of bounds"
    end
    return @store[num]
  end

  private

  def is_valid?(num)
    (0...@store.length).cover?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    return false if self.include?(num)
    self[num] << num
    return true
  end

  def remove(num)
    return false if !self.include?(num)
    self[num].delete(num)
    return true
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    return false if self.include?(num)
    self[num] << num
    @count += 1

    self.resize! if @count >= num_buckets
    return true
  end

  def remove(num)
    return false if !self.include?(num)
    self[num].delete(num)
    @count -= 1
    return true
  end

  def include?(num)
    self[num].include?(num)
  end

  def resize!
    tmp = Array.new(num_buckets * 2) { Array.new }
    @store.each do |bucket|
      bucket.each do |ele|
        tmp[ele % tmp.length] << ele
      end
    end
    @store = tmp
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end
