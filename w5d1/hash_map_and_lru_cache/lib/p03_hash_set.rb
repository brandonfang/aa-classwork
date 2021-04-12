class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    return false if self.include?(key)
    self[key] << key
    @count += 1
    self.resize! if @count >= num_buckets
    true
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    return false if !self.include?(key)
    self[key].delete(key)
    @count -= 1
    true
  end
  
  def resize!
    temp = Array.new(num_buckets * 2) { Array.new }
    @store.each do |bucket|
      bucket.each do |ele|
        temp[ele.hash % temp.length] << ele
      end
    end
    @store = temp
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end
end
