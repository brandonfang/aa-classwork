class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new('head')
    @tail = Node.new('tail')
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail && @tail.prev == @head
  end

  def get(key)
    node = self.first
    while node != @tail
      return node.val if node.key == key
      node = node.next
    end
    nil
  end

  def include?(key)
    !self.get(key).nil?
  end

  def append(key, val)
    node = Node.new(key, val)
    self.last.next = node
    node.prev = self.last
    node.next = @tail
    @tail.prev = node
    return node
  end

  def update(key, val)
    node = self.first
    while node != @tail
      node.val = val if node.key == key
      node = node.next
    end
    nil
  end

  def remove(key)
    node = self.first
    while node != @tail
      prev_node, next_node = node.prev, node.next
      if node.key == key
        prev_node.next = next_node
        next_node.prev = prev_node
        return true
      end
      node = node.next
    end
    false
  end

  def each
    node = self.first
    while node != @tail
      yield(node)
      node = node.next
    end
  end

  def [](index)
    node = self.first
    while node != @tail && index != 0
      index -= 1
      node = node.next
    end
    return node if node != @tail
  end
  
  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
