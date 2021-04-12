require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

# Oldest in the front, newest (most recent) at the end
class LRUCache
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    if @map.get(key).nil?
      return calc!(key)
    else
      node = @map.get(key)
      update_node!(node)
      node.val
    end
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
    eject! until count < @max
    val = @prc.call(key)
    node = @store.append(key, val)
    @map.set(key, node)
    val
  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
    key = node.key
    @store.remove(key)
    node = @store.append(node.key, node.val)
    @map.set(key, node)
  end

  def eject!
    front = @store.first
    @store.remove(front.key)
    @map.delete(front.key)
  end
end
