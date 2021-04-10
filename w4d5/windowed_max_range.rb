
def windowed_max_range_1(arr, w)
  current_max_range = nil
  (0..arr.length - w).each do |i|
    window = arr[i...i + w]
    diff = window.max - window.min
    current_max_range = diff if current_max_range.nil? || diff > current_max_range
  end
  current_max_range
end

p windowed_max_range_1([1, 0, 2, 5, 4, 8], 2) # == 4 # 4, 8
p windowed_max_range_1([1, 0, 2, 5, 4, 8], 3) # == 5 # 0, 2, 5
p windowed_max_range_1([1, 0, 2, 5, 4, 8], 4) # == 6 # 2, 5, 4, 8
p windowed_max_range_1([1, 3, 2, 5, 4, 8], 5) # == 6 # 3, 2, 5, 4, 8

class MyQueue
  def initialize
    @store = []
  end
  
  def peek
    @store.first
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end

  def enqueue(ele)
    @store << ele
  end

  def dequeue
    @store.shift
  end 
end

class MyStack
  def initialize
    @store = []
  end

  def peek
    @store.last
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end

  def push(ele)
    @store << ele
  end

  def pop
    @store.pop
  end 
end

class StackQueue 
  def initialize
    @stack1 = MyStack.new
    @stack2 = MyStack.new
  end

  def size
    @stack1.length + @stack2.length
  end

  def empty?
    @stack1.empty? && @stack2.empty?
  end

  def enqueue(ele)
    @stack1.push(ele)
  end

  def dequeue
    raise if @stack1.empty? && @stack2.empty?
    if @stack2.empty?
      while !@stack1.empty?
        @stack2.push(@stack1.pop)
      end
    end
    @stack2.pop
  end
end

class MinMaxStack
  def initialize
    @store = []
  end

  def peek
    @store.last
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end

  def push(ele)
    @store << ele
  end

  def pop
    @store.pop
  end 

  def max
  end
  
  def min  

  end
end





